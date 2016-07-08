var header = document.querySelector('.header');

document.addEventListener('scroll', onScroll);

function onScroll() {
    if (document.body.scrollTop < 500) {
        header.style.height = Math.min(100, document.body.scrollTop) + "px";
    }
}