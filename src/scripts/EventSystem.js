var listeners = {};

module.exports = {
    post: post,
    listen: listen
};

function post(name, event) {
    var result = [];
    if (listeners[name]) {
        listeners[name].forEach(function (listener) {
            try {
                result.push(listener(event));
            } catch (e) {
                console.error(e);
            }
        });
    }
    return result.length === 1 ? result[0] : result;
}

function listen(name, listener) {
    if (!listeners[name]) {
        listeners[name] = [];
    }
    listeners[name].push(listener);
}
