let settings, prefix = '';
if (document.location.href.indexOf("localhost") > -1)
    prefix = '/strangerintheq.github.io'


async function load(){
    settings = await (await fetch(prefix + '/settings.json')).json();

    document.querySelector('.avatar')
        .setAttribute('src', prefix + '/' + settings.avatar);

    document.querySelector('.projects').innerHTML =
        settings.projects.map(asProject).join('');

    document.querySelector('.links').innerHTML =
        settings.links.map(asLink).join('');

    init();

}

load();

function asProject(project) {
    return `<a data-project="${project[0]}"
        onclick="setProject(this, '${prefix + project[2]}')">${project[1]}</a>`
}

function asLink(link){
    return `<a href="${link[2]}" target="_blank">
        <img src="${prefix + '/resources/'+link[0]}" title="${link[1]}">
    </a>`;
}

function setProject(link, url) {
    let selected = document.querySelector('.selected');
    selected && selected.classList.remove('selected')
    link.classList.add('selected')
    document.querySelector('iframe').src = url ;
    history.pushState({}, url, prefix+'/?p='+link.dataset.project)
}

function init() {
    if (document.location.search) {
        const proj = new URL(location.href).searchParams.get('p');
        let url = [...settings.projects, ...settings.upcoming]
            .find(p => p[0] === proj)[2];
        document.querySelector('iframe').src = url;
        // document.querySelector(`a[data-project="${proj}"]`).click()
    } else {
        [...document.querySelectorAll('.projects a')]
            .sort(() => Math.random() - 0.5)[0].click()
    }
}