var UI = (function () {

    var top_px = 2;

    return {
        elem: elem, button: button, slider: slider, text: text
    };

    function button(text, func) {
        var button = elem('input', 25);
        button.setAttribute('type', 'button');
        button.setAttribute('value', text);
        button.style.color = 'black';
        button.onclick = func;
        return button;
    }

    function slider(name, max, value) {
        var slider = elem('input', 25, name);
        slider.name = name;
        slider.setAttribute('type', 'range');
        slider.setAttribute('min', '0');
        slider.setAttribute('max', max);
        slider.setAttribute('value', value);
        return slider;
    }

    function text(txt) {
        var textarea = elem('textarea', 110);
        textarea.value = txt || '';
        textarea.style.width = '220px';
        textarea.style.height = '100px';
        textarea.style.backgroundColor = 'rgba(0,0,0,0.5)';
        return textarea;
    }

    function elem(tagName, size, title) {
        var ui = document.createElement('div');
        ui.style.top = top_px + 'px';
        ui.style.left = '5px';
        ui.style.position = 'absolute';
        ui.style.color = 'lightgray';
        document.body.appendChild(ui);
        var element = document.createElement(tagName);
        element.style.display = 'inline-block';
        element.style.color = 'lightgray';
        ui.appendChild(element);
        top_px += size;
        if (title) {
            var titleElement = document.createElement('span');
            ui.appendChild(titleElement);
            titleElement.textContent = title;
        }
        element.update = function(value, fixed){
            if (title) {
                titleElement.textContent = title + ': ' + (value/1).toFixed(fixed || 0);
            }
        };
        return element;
    }

})();
