var UI = (function () {
    var top_px = 2;
    return {
        new: function (tagName, size, title) {
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
            element.update = function(value){
                if (title) {
                    titleElement.textContent = title + ': ' + value;
                }
            };
            return element;
        }
    };
})();
