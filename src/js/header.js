var header = document.querySelector('.header');
var logo = document.querySelector('.logo');

document.addEventListener('scroll', onScroll);
onScroll();
header.classList.remove('hidden');

module.exports = {
    init: function () {}      
};

function onScroll() {
    var scrolled = document.body.scrollTop > 100;
    var action = scrolled ? "add" : "remove";
    // if (scrolled) {
    //     header.classList.add('header-collapsed');
    //     logo.classList.add('logo-collapsed');
    // } else {
    //     header.classList.remove('header-collapsed');
    //     logo.classList.remove();
    // }
    logo.classList[action]('logo-collapsed');
    header.classList[action]('header-collapsed');
}