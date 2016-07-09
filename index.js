var header = document.querySelector('.header');

document.addEventListener('scroll', onScroll);
onScroll();

function onScroll() {
    if (document.body.scrollTop > 100) {
        header.classList.add('header-collapsed');
    } else {
        header.classList.remove('header-collapsed');
    }
}