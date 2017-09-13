var Syntax = (function () {
    var types = ['float', 'vec2', 'vec3', 'vec4', 'int', 'void'];
    var syntax = [
        'return', 'normalize', 'dot', 'clamp',
        'mix', 'floor', 'fract', 'sqrt', 'cross',
        'for', 'asin','sin', 'atan', 'tan', 'acos',
        'cos', 'max', 'min', 'abs', 'break', 'if', 'pow'
    ];
    return {
        glsl: function () {
            Array.prototype.slice
                .call(document.querySelectorAll('.glsl'))
                .forEach(process);
        }
    };

    function getPad(pad) {
        var result = '';
        for (var i = 0; i < pad; i++) {
            result += '&nbsp;&nbsp;&nbsp;&nbsp;'
        }
        return result;
    }

    function process(glsl) {
        var text = glsl.innerHTML;
        colorize(types, 'cadetblue');
        colorize(syntax, 'coral');
        var split = text.split('\n');
        var pad = 0;
        for (var i = 0; i < split.length; i++) {
            var open = split[i].indexOf('{') > -1;
            var close = split[i].indexOf('}') > -1;
            close && !open && pad--;
            split[i] = getPad(pad) + split[i];
            open && !close && pad++;
        }

        text = split.join("<br>");
        // text = text.replace(/\t+/g, "&nbsp;&nbsp;&nbsp;&nbsp;");
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