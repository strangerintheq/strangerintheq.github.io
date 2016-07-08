var header = document.querySelector('.header');

document.addEventListener('scroll', onScroll);
onScroll();

function onScroll() {
    header.style.height = Math.max(100, 500 - document.body.scrollTop) + "px";
}