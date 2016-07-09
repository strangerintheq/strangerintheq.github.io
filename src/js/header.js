var logo = require('./logo');
var header = document.querySelector('.header');

document.addEventListener('scroll', onScroll);
onScroll();
header.classList.remove('hidden');

module.exports = {
    init: function () {}      
};

function onScroll() {
    var scrolled = document.body.scrollTop > 100;
    var action = scrolled ? "add" : "remove";
    logo.classList[action]('logo-collapsed');
    header.classList[action]('header-collapsed');
}