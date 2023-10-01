function svgMap(targetNode) {

    const center = {lat: 0, lon: 0};
    const state = {center, heading: 0, zoom: 5};

    let z = 5, a = 0;
    let tilesCache = {}, repaintRequested, tileSize, viewport, w, h, x = 0, y = 0;
    let svg, basemap, overlay, tmp;
    init()

    function init() {
        targetNode.innerHTML = `<svg>
            <g class="basemap"></g>
            <g class="overlay"></g>
            <g class="tmp"></g>
        </svg>`;
        targetNode.style.touchAction = "none";
        svg = targetNode.querySelector("svg");
        basemap = svg.querySelector(".basemap");
        overlay = svg.querySelector(".overlay");
        tmp = svg.querySelector(".tmp");
        addEventListener("resize", resize);
        resize();
        interaction();
        return {svg, basemap, overlay, tmp}
    }

    function interaction() {
        let start, count = 0, pointers = {}, touchCfgChanged = false, listenersActivated = false;
        svg.addEventListener("pointerdown", down);
        svg.addEventListener("wheel", e => {
            e.preventDefault()
            applyZoom(e.offsetX, e.offsetY, z, e.deltaY < 0 ? 1.1 : 0.9);
        });

        function down(e) {
            if (!listenersActivated) {
                addEventListener("pointermove", move);
                addEventListener("pointerup", up);
                listenersActivated = true;
            }
            if (e.isPrimary) {
                pointers = {};
                count = 0;
            }
            if (count === 2)
                return;
            count++;
            touchCfgChanged = true;
            let x = e.offsetX;
            let y = e.offsetY;
            pointers[e.pointerId] = {x, y, ex: x, ey: y};
            transform();
        }

        function move(e) {
            let p = pointers[e.pointerId];
            if (!p)
                return;
            let rect = svg.getBoundingClientRect();
            p.ex = e.clientX - rect.x;
            p.ey = e.clientY - rect.y;
            transform();
        }

        function up(e) {
            if (!pointers[e.pointerId])
                return;
            count--;
            touchCfgChanged = true;
            delete pointers[e.pointerId];
            transform();
            if (count === 0) {
                removeEventListener("pointermove", move);
                removeEventListener("pointerup", up);
                listenersActivated = false;
            }
        }

        function transform() {
            let v = Object.values(pointers);
            let p0 = v[0];
            let p1 = v[1] || p0;
            if (p0) {
                if (touchCfgChanged) {
                    start = {x, y, z, a};
                    touchCfgChanged = false;
                    Object.values(pointers).forEach(p => {
                        p.x = p.ex;
                        p.y = p.ey
                    })
                }
                let x0 = p0.x / 2 + p1.x / 2;
                let y0 = p0.y / 2 + p1.y / 2;
                let x1 = p0.ex / 2 + p1.ex / 2;
                let y1 = p0.ey / 2 + p1.ey / 2;
                if (p0 !== p1) {
                    let d0 = hypot(p0.x - p1.x, p0.y - p1.y);
                    let d1 = hypot(p0.ex - p1.ex, p0.ey - p1.ey);
                    let kz = d1 / d0;
                    x = start.x - x0 / kz + x1 / kz;
                    y = start.y - y0 / kz + y1 / kz;
                    applyZoom(x0, y0, start.z, kz);
                    let a0 = atan2(p1.y - p0.y, p1.x - p0.x);
                    let a1 = atan2(p1.ey - p0.ey, p1.ex - p0.ex);
                    a = start.a + a1 - a0;
                } else {
                    x = start.x - x0 + x1;
                    y = start.y - y0 + y1;
                }
                requestRepaint()
            } else {
                start = null;
            }
            updateCenter()
        }

        function applyZoom(x0, y0, startZ, kz) {
            if (startZ * kz > 2 ** 20 || startZ * kz < 5)
                return
            let hw = w / 2, hh = h / 2;
            let r = atan2(y - y0 + hh, x - x0 + hw);
            let d = hypot(x - x0 + hw, y - y0 + hh) * kz;
            x = cos(r) * d + x0 - hw;
            y = sin(r) * d + y0 - hh;
            z = startZ * kz;
            updateCenter()
            requestRepaint()
        }

        function updateCenter() {
            let [newLat, newLon] = unProject(0, 0,);
            center.lat = newLat;
            center.lon = newLon
        }
    }

    function repaint() {
        calcTiles();
        calcOverlay();
        repaintRequested = false;
    }

    function project(lat, lon) {
        let s = tileSize / 2 * z;
        lat = -log(tan(PI / 4 + lat / 360 * PI))
        return [lon / 180 * s + x, lat / PI * s + y];
    }

    function unProject(px, py, target = []) {
        let s = tileSize / 2 * z;
        let lat = PI / 4 - atan(exp((py - y) / s * PI))
        target[0] = lat / PI * 360;
        target[1] = (px - x) / s * 180
        return target
    }

    function calcOverlay() {
        overlay.childNodes.forEach(node => {
            if (node.dataset.points) {
                let pts = JSON.parse(node.dataset.points)
                    .map((from, i, arr) => {
                        from = {lat: from[0], lon: from[1]}
                        let to = arr[i + 1]
                        let result = [from];
                        if (to) {
                            to = {lat: to[0], lon: to[1]}
                            let n = floor(haversineDistance(from, to) / earthRadius * asDegrees)
                            if (n > 1)
                                for (let j = 1; j < n; j++)
                                    result.push(interpolateGreatCircle(from, to, j / n))
                        }
                        return result
                    }).flat()

                node.setAttribute("points",
                    pts.map(p => project(p.lat, p.lon)))
            }
            if (node.dataset.point) {
                node.setAttribute("transform",
                    `translate(${project(...JSON.parse(node.dataset.point))})`)
            }
        })
    }

    function resize() {
        w = targetNode.clientWidth;
        h = targetNode.clientHeight;
        tileSize = max(w, h) / 2;
        let pad = 0;
        viewport = {left: -w / 2 + pad, top: -h / 2 + pad, right: w / 2 - pad, bottom: h / 2 - pad};
        svg.setAttribute("viewBox", [-w / 2, -h / 2, w, h].toString());
        svg.setAttribute("width", w + "px");
        svg.setAttribute("height", h + "px");
        setCenter(center.lat, center.lon);
    }

    function calcTiles() {
        basemap.innerHTML = "";
        let s = tileSize * z;
        let tiles = [tile(x, y, s, 0, 0, 0)];
        for (let i = 1; i < log2(z) - 1; i++)
            tiles = tiles.map(subdivide).flat().filter(inViewport);
        tiles = tiles.concat(tiles.map(subdivide).flat().filter(inViewport))
        tiles.forEach(drawTile);
        let actualTilesKeys = tiles.map(tileKey);

        Object.keys(tilesCache)
            .filter(key => !actualTilesKeys.includes(key))
            .forEach(key => {
                tilesCache[key].removeAttribute("href"); // stop loading
                delete tilesCache[key];
            });

        function tile(x, y, s, tz, tx, ty) {
            return {x, y, s, tz, tx, ty};
        }

        function subdivide({x, y, s, tz, tx, ty}) {
            let d = s / 2, t = d / 2, TZ = tz + 1,
                TX = tx * 2, TY = ty * 2;
            return [
                tile(x - t, y - t, d, TZ, TX, TY),
                tile(x + t, y - t, d, TZ, TX + 1, TY),
                tile(x + t, y + t, d, TZ, TX + 1, TY + 1),
                tile(x - t, y + t, d, TZ, TX, TY + 1)
            ];
        }

        function inViewport({x, y, s}) {
            return x + s / 2 > viewport.left
                && x - s / 2 < viewport.right
                && y + s / 2 > viewport.top
                && y - s / 2 < viewport.bottom;
        }
    }

    function tileKey({tx, ty, tz}) {
        return `x${tx}y${ty}z${tz}`;
    }

    function drawTile(tile) {
        let {x, y, s, tx, ty, tz} = tile;
        let key = tileKey(tile);
        let img = tilesCache[key];
        if (!img) {
            img = tilesCache[key] = document.createElementNS("http://www.w3.org/2000/svg", "image");
            img.setAttribute("href", `https://tile.openstreetmap.de/${tz}/${tx}/${ty}.png`);
        }
        basemap.append(img);
        img.setAttribute("x", x - s / 2)
        img.setAttribute("y", y - s / 2)
        img.setAttribute("width", s)
        img.setAttribute("height", s)
    }

    function requestRepaint() {
        !repaintRequested && requestAnimationFrame(repaint);
        repaintRequested = true;
    }

    function setCenter(newLat, newLon, zoom = log2(z)) {
        center.lat = newLat
        center.lon = newLon;
        z = 2 ** zoom;
        let [dx, dy] = project(center.lat, center.lon);
        x -= dx;
        y -= dy;
        requestRepaint()
    }

    return {
        state,
        requestRepaint,
        project,
        unProject,
        setCenter,
        add(node) {
            tmp.innerHTML = node;
            node = tmp.querySelector("*")
            overlay.append(node);
            requestRepaint()
        }
    }
}