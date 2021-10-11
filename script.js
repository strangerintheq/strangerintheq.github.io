
let prefix = '';
if (document.location.href.indexOf("localhost") > -1)
    prefix = '/strangerintheq.github.io'

let projects = [
    ["The Nest", "https://ipfs.io/ipfs/QmY2YPbLz9DvSscxqJeW3o8fxhTMsGYmEs9q91Lsedbx3C/"],
    ["Mozaic Perception", "https://ipfs.io/ipfs/QmRpZzFrUnD5AGz9vPfkRMC4iCsVbyJPQKCj3v5HMxoLri/"],
    ["Dancing Souls", "https://ipfs.io/ipfs/QmXPu9MuBUXpC1Hod52MeqMamsVsdUjsFc4389A9deeSFb/"],
    ["Nucle", "https://ipfs.io/ipfs/QmT1V4q8TJ7Sr6HnFAW1MGubUZRkBTiSYTHwQB6TeaTzRg/"],
    ["Inner Sight", "https://ipfs.io/ipfs/QmcNfc8dmrFyycdk2Bcj8Vs3mnKEz1rqi312wGjiwPqt2G/"],
    ["Steam Cells", "https://ipfs.io/ipfs/QmbS2uRqz7iuFzAykhqBk4Ug6u8ibR31seLW7fV49yNJJ2/"],
    ["NETGRA", "https://ipfs.io/ipfs/QmbMGC42M11ZSdCTua6rK8TgT3VpzTQuGWQYBjxzqs6UzC?objkt=270003&creator=tz2MHcnM7fEVtExELMPBZb5njDweqMGvbn8A&viewer=tz2MHcnM7fEVtExELMPBZb5njDweqMGvbn8A/"],
    // ["Escape", "https://ipfs.io/ipfs/QmdcXKbPKQmdFPudWHq38cVd8dbUiCYjPtmDkEZBN9eUji/"],
];

let links = [
    ["hicetnunc.svg", "Hic Et Nunc", "https://www.hicetnunc.xyz/Stranger_in_the_Q"],
    ["opensea.svg", "Opensea", "https://opensea.io/Stranger_in_the_q"],
    ["insta.svg", "Instagram", "https://www.instagram.com/stranger_in_the_q/"],
    ["objkt.png", "Objkt.com", "https://objkt.com/profile/tz2MHcnM7fEVtExELMPBZb5njDweqMGvbn8A"],
    ["twitter.svg", "Twitter", "https://twitter.com/stranger_intheq"],
    ["kalamint.svg", "Kalamint", "https://kalamint.io/user/strangerintheq"],
    ["foundation.svg", "Foundation", "https://foundation.app/@Stranger_in_the_Q"],
]

document.querySelector('.projects').innerHTML = projects.map(project => {
    return `<a data-project="${project[0]}"
                    onclick="setProject(this, '${project[1]}')">${project[0]}</a>`
}).join('');

document.querySelector('.links').innerHTML = links.map(project => {
    return `<a href="${project[2]}" target="_blank">
            <img src="${prefix + '/site/links/'+project[0]}" title="${project[1]}">
        </a>`;
}).join('');

function setProject(link, url) {
    let selected = document.querySelector('.selected');
    selected && selected.classList.remove('selected')
    link.classList.add('selected')
    // document.querySelector('iframe').src = prefix + '/site/loading.html';
    // setTimeout(() => {
    document.querySelector('iframe').src = url;
    // }, 100);
    history.pushState({}, url, prefix+'/?project='+link.dataset.project)
}

if (document.location.search) {
    const proj = new URL(location.href).searchParams.get('project');
    document.querySelector(`a[data-project="${proj}"]`).click()
} else {
    [...document.querySelectorAll('.projects a')]
        .sort(() => Math.random() - 0.5)[0].click()
}
// window.onpopstate = (s) => {
//     console.log(s)
// }