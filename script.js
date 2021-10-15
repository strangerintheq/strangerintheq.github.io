let settings, prefix = '';
if (document.location.href.indexOf("localhost") > -1)
    prefix = '/strangerintheq.github.io'

let aboutProjectFrame = document.querySelector('.about-project iframe');
aboutProjectFrame.onload = () => {
    setTimeout(() =>{
        aboutProjectFrame.classList.add('visible')
    }, 1000)
}

let previewFrame = document.querySelector('.preview-wrapper iframe');

load();

async function load(){
    showLoader()
    settings = await (await fetch(prefix + '/settings.json?'+Date.now())).json();
    document.querySelector('.avatar')
        .setAttribute('src', prefix + '/' + settings.avatar);
    fill('.projects', settings.projects, asProject)
    fill('.links-nft', settings.links.nft, asLink)
    fill('.links-social', settings.links.social, asLink)
    init();
}

function fill(selector, array, mapFn) {
    document.querySelector(selector).innerHTML
        = array.map(mapFn).join('');
}

function asProject(p) {
    return `<a data-project="${p[0]}" onclick="setProject(this.dataset.project)">${p[1]}</a>`
}

function asLink(link){
    return `<a href="${link[2]}" target="_blank"><img 
        src="${prefix + '/resources/'+ link[0]}" title="${link[1]}"></a>`;
}

function setProject(key) {
    const selected = document.querySelector('.selected');
    selected && selected.classList.remove('selected');

    const item = document.querySelector(`a[data-project="${key}"]`);
    item && item.classList.add('selected');
    aboutProjectFrame.classList.remove('visible')
    showLoader();
    
    setTimeout(() => {
        let previewUrl = prefix + '/generative/' +  key.toLowerCase()+ '/index.html';
        let aboutUrl = prefix + '/generative/' +  key.toLowerCase() + '/about.html';


        previewFrame.contentDocument.body.innerHTML = '';
        previewFrame.src = previewUrl;

        aboutProjectFrame.src = aboutUrl;

        history.pushState({}, previewUrl, prefix + '/?p=' + key)
        loaded();
    }, 300);
}

function loaded() {
    setTimeout(() => document.body.classList.add('loaded'), 100);
}

function init() {
    loaded()
    let p = new URL(location.href).searchParams.get('p');
    if (p) {
        setProject(p)
    } else {
        [...document.querySelectorAll('.projects a')]
            .sort(() => Math.random() - 0.5)
            .pop()
            .click()
    }
}

function showLoader() {
    document.body.classList.remove('loaded')
    const rnd = i => Math.floor(Math.random()*i);
    let loader = '';
    let count = 3+rnd(7) | 0;
    for (let r =0,i=0; i< count; i++, r = 20-i*2) {
        const dir = Math.random() > 0.5 ? 360 : -360;
        const period = 300 + rnd(900);
        const style = `--rot:${dir}rad;animation:rr ${period}s linear infinite`;
        const dash = Array(2 + rnd(r)).fill(0).map(e => rnd(r)).join(' ');
        const color = `hsla(${rnd(360)},${60 + rnd(25)}%,${60 + rnd(25)}%,0.8)`;
        loader += `<circle style="${style}" stroke=${color} 
            stroke-dasharray="${dash}" r=${r} fill=none ></circle>`;
    }
    document.querySelector('svg g').innerHTML = loader;
}