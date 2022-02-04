(function imagesSlider() {
    let slider = document.querySelector('.slider div');
    let size = 384;
    let count = 60;
    slider.innerHTML = [...Array(count)].map((_, i) => {
        i = i < 10 ? ('0'+ i) : i;
        let url1 = `https://artist-staging.artblocks.io/_next/image?url=`;
        let url2 = `https%3A%2F%2Fartblocks-artists-staging.s3.amazonaws.com%2F`;
        let img = `1310000${i}.png&amp;w=${size}&amp;q=75`;
        return `<img src="${url1 + url2 + img}">`;
    }).join('');


    let scrollAmount = 0;

    slider.style.minWidth = count*size + 'px';
    slider.parentNode.addEventListener('mousewheel', e => {
        e.preventDefault()
        scrollAmount -= e.wheelDelta;
    })

    requestAnimationFrame(function animateScroll(){
        slider.parentNode.scrollLeft += scrollAmount*0.14;
        scrollAmount -= scrollAmount*0.14;
        if (Math.abs(scrollAmount) < 0.1)
            scrollAmount = 0;

        requestAnimationFrame(animateScroll)
    })
})()