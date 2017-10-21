// Events.post(Events.SWITCH_ATMOSPHERE, false);
Events.post(Events.SWITCH_ATMOSPHERE_GROUND, false);
Events.post(Events.SWITCH_ATMOSPHERE_NIGHT, false);

Events.post(Events.ROTATE_TO, {
    lat: 55.753687,
    lon: 37.619908,
    alt: 1000
});

Events.post(Events.CREATE_BASE_LAYER_PICKER, './map-menu-config.json');

Events.post(Events.CREATE_BUTTON, {
    html: SvgIcons.gear(),
    title: 'Настройки',
    event: Events.TOGGLE_FORM,
    data: 'settings'
});

Events.post(Events.CREATE_BUTTON, {
    align: 'right',
    title: 'Глобус / Карта',
    icon: 'images/layers/elevationLocal.png',
    event: Events.SWITCH_GLOBE
});

var propsForm = Events.post(Events.CREATE_FORM, {
    id: 'object-properties',
    title: 'Свойства',
    width: 300,
    height: 225,
    left: 70,
    top: 55,
    close: true,
    resize: true
});

propsForm.style.overflow = 'hidden';

Events.listen(Events.SHOW_PROPERTIES_FORM, function(props) {
    propsForm.clear();
    if (!props.props) return;
    propsForm.querySelector('.form-title').innerHTML = props.title;
    for (var key in props.props) {
        if (props.props.hasOwnProperty(key)) {
            if (propsForm.querySelector('span'))
                propsForm.addHtml({html:'<hr/>'});
            propsForm.addHtml({html:span(key + ':', '45%')+'&nbsp;'+span(JSON.stringify(props.props[key]), '45%')});
        }
    }
    propsForm.show();
});

function span(t, w) {
    return '<span style="font-size: 15px; width:'+w+';display: inline-block; overflow: hidden">' + t + '</span>';
}


Events.post(Events.CREATE_FORM, {
    id: 'settings', title: 'Настройки', width: 217, height: 225, left: 5, top: 55,
    contents: [
        {type: 'button', width: 90, title: 'Навигатор', post: Events.SWITCH_CONTROLS},
        {type: 'button', width: 90, title: 'Компас', post: Events.SWITCH_COMPASS_SVG},
        {type: 'button', width: 90, title: 'Проекция', post: Events.SWITCH_2D_PROJECTION},
        {type: 'button', width: 90, title: 'Атмосфера', post: Events.SWITCH_ATMOSPHERE},
        {type: 'button', width: 90, title: 'Поверхность', post: Events.SWITCH_ATMOSPHERE_GROUND},
        {type: 'button', width: 90, title: 'Ночь', post: Events.SWITCH_ATMOSPHERE_NIGHT},

        {type: 'html', html: txt('Звездное небо')},
        {type: 'combobox', width: 180, values: [
            {text: 'Звезды', post: Events.CHANGE_SPACE, data: 'stars'},
            {text: 'Космос 1', post: Events.CHANGE_SPACE, data: {skybox: 'images/skybox/one'}, selected: true},
            {text: 'Космос 2', post: Events.CHANGE_SPACE, data: {skybox: 'images/skybox/two'}},
            {text: 'Нет', post: Events.CHANGE_SPACE}
        ]}
    ]
});

function txt(t) {
    return '<span style="font-size: 15px; width:200px; text-align: center; display: inline-block">' + t + '</span>';
}