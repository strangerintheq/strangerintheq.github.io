
let prefix = '';
if (document.location.href.indexOf("localhost") > -1)
    prefix = '/strangerintheq.github.io'


async function load(){
    const settings = await (await fetch(prefix + '/settings.json')).json();

    document.querySelector('.avatar')
        .setAttribute('src', prefix + '/' + settings.avatar);

    document.querySelector('.projects').innerHTML = settings.projects.map(project => {
        return `<a data-project="${project[0]}"
                    onclick="setProject(this, '${prefix + project[1]}')">${project[0]}</a>`
    }).join('');

    document.querySelector('.links').innerHTML = settings.links.map(project => {
        return `<a href="${project[2]}" target="_blank">
            <img src="${prefix + '/resources/'+project[0]}" title="${project[1]}">
        </a>`;
    }).join('');

}

load();

function setProject(link, url) {
    let selected = document.querySelector('.selected');
    selected && selected.classList.remove('selected')
    link.classList.add('selected')
    document.querySelector('iframe').src = url ;
    history.pushState({}, url, prefix+'/?project='+link.dataset.project)
}

if (document.location.search) {
    const proj = new URL(location.href).searchParams.get('project');
    document.querySelector(`a[data-project="${proj}"]`).click()
} else {
    [...document.querySelectorAll('.projects a')]
        .sort(() => Math.random() - 0.5)[0].click()
}
