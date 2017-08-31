var Mouse = (function() {
    var dragStartXY, centerAtDragStart;
    var mouse = {
        init: init
    };
    return mouse;

    function init(center, zoom) {
        mouse.zoom = zoom || 1.5;
        mouse.center = center || [0, 0];
        window.addEventListener('mousewheel', wheel);
        window.addEventListener('mousedown', down);
        window.addEventListener('mouseup', up);
        window.addEventListener('mousemove', move);
    }

    function wheel(e) {
        mouse.zoom *= e.wheelDelta > 0 ? 0.9 : 1.1;
    }

    function down(e) {
        if (e.target.tagName !== 'CANVAS') return;
        centerAtDragStart = [mouse.center[0], mouse.center[1]];
        dragStartXY = e;
    }

    function up() {
        centerAtDragStart = dragStartXY = null;
    }

    function move(e) {
        if (!dragStartXY || e.target.tagName !== 'CANVAS') return;
        var r = GL.resolution();
        var x = 4 * mouse.zoom * (dragStartXY.x - e.x) / r[0];
        var y = 4 * mouse.zoom * (dragStartXY.y - e.y) / r[0];
        mouse.center = [centerAtDragStart[0] + x, centerAtDragStart[1] - y];
    }
})();