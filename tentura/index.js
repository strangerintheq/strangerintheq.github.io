document.querySelector('.ropsten').innerHTML = [...Array(60)].map((_,i) => {
    i = i < 10 ? ('0'+ i) : i;
    return `<img src="https://artist-staging.artblocks.io/_next/image?url=https%3A%2F%2Fartblocks-artists-staging.s3.amazonaws.com%2F1310000${i}.png&amp;w=256&amp;q=75">`
}).join('')