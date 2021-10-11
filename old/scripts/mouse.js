var Mouse = (function() {
    var dragStartXY, centerAtDragStart;
    return {init: init};

    function init(center, zoom) {
        Mouse.zoom = zoom || 1.5;
        Mouse.center = center || [0, 0];
        window.addEventListener('mousewheel', wheel);
        window.addEventListener('mousedown', down);
        window.addEventListener('mouseup', up);
        window.addEventListener('mousemove', move);
    }

    function wheel(e) {
        Mouse.zoom *= e.wheelDelta > 0 ? 0.9 : 1.1;
    }

    function down(e) {
        if (e.target.tagName !== 'CANVAS') return;
        centerAtDragStart = [Mouse.center[0], Mouse.center[1]];
        dragStartXY = e;
    }

    function up() {
        centerAtDragStart = dragStartXY = null;
    }

    function move(e) {
        if (!dragStartXY || e.target.tagName !== 'CANVAS') return;
        var c = GL.canvas;
        var x = 4 * Mouse.zoom * (dragStartXY.x - e.x) / c.width;
        var y = 4 * Mouse.zoom * (dragStartXY.y - e.y) / c.height;
        Mouse.center = [centerAtDragStart[0] + x, centerAtDragStart[1] - y];
    }
})();