var Syntax = (function () {
    var types = ['float', 'vec2', 'vec3', 'vec4'];
    var syntax = [
        'return', 'normalize', 'dot', 'clamp',
        'mix', 'floor', 'fract', 'sqrt', 'cross'
    ];
    return {
        glsl: function () {
            Array.prototype.slice
                .call(document.querySelectorAll('.glsl'))
                .forEach(process);
        }
    };

    function process(glsl) {
        var text = glsl.innerHTML;
        colorize(types, 'cadetblue');
        colorize(syntax, 'coral');
        text = text.split('\n').join("<br>");
        text = text.replace(/\t+/g, "&nbsp;&nbsp;&nbsp;&nbsp;");
        // text = text.split('\t').join("&nbsp;&nbsp;&nbsp;&nbsp;");
        glsl.innerHTML = text;

        function colorize(words, color) {
            words.forEach(function (word) {
                text = text.split(word)
                    .join('<span style="color: ' + color + '">' + word + '</span>');
            });
        }
    }
})();