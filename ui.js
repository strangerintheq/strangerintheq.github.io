var UI = (function () {
    var top_px = 0;
    return {
        new: function (tagName, title) {
            var ui = document.createElement('div');
            ui.style.top = top_px + 'px';
            ui.style.position = 'absolute';
            ui.style.color = 'lightgray';
            document.body.appendChild(ui);
            var element = document.createElement(tagName);
            element.style.display = 'inline-block';
            ui.appendChild(element);
            top_px += 25;

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
