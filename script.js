let settings, prefix = '';
if (document.location.href.indexOf("localhost") > -1)
    prefix = '/strangerintheq.github.io'


async function load(){
    showLoader()
    settings = await (await fetch(prefix + '/settings.json?'+Date.now())).json();
    document.querySelector('.avatar')
        .setAttribute('src', prefix + '/' + settings.avatar);
    fill('.projects', settings.projects.released, asProject)
    fill('.links-nft', settings.links.nft, asLink)
    fill('.links-social', settings.links.social, asLink)
    init();
}

function fill(selector, array, mapFn) {
    document.querySelector(selector).innerHTML
        = array.map(mapFn).join('');
}

load();

function asProject(project) {
    return `<a data-project="${project[0]}"
        onclick="setProject(this, '${prefix + project[2]}')">${project[1]}</a>`
}

function asLink(link){
    return `<a href="${link[2]}" target="_blank"><img src="${prefix + '/resources/'+link[0]}" title="${link[1]}"></a>`;
}

function setProject(link, url) {
    let selected = document.querySelector('.selected');
    selected && selected.classList.remove('selected')
    link.classList.add('selected');
    showLoader()
    setTimeout(() => {
        document.querySelector('iframe').src = url ;
        history.pushState({}, url, prefix+'/?p='+link.dataset.project)
        loaded()
    }, 300)
}

function loaded(){
    setTimeout(() => {
        document.body.classList.add('loaded')
    }, 100)
}

function init() {
    loaded()
    if (document.location.search) {
        const proj = new URL(location.href).searchParams.get('p');
        let url = [...settings.projects.released, ...settings.projects.upcoming]
            .find(p => p[0] === proj)[2];
        document.querySelector('iframe').src = url;
        let item = document.querySelector(`a[data-project="${proj}"]`);
        item && item.classList.add('selected')
    } else {
        [...document.querySelectorAll('.projects a')]
            .sort(() => Math.random() - 0.5)[0].click()
    }
}

function showLoader(){
    document.body.classList.remove('loaded')
    const rnd = i => Math.floor(Math.random()*i);
    let loader = '';
    let count = 3+rnd(7)|0;
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