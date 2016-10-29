var logo = document.querySelector('.logo');

module.exports = logo;

initEye('left');
initEye('right');

function initEye(name) {
    var eye = logo.querySelector('#' + name + '-eye');
    var center = logo.querySelector('#' + name + '-eye-center');

    // eye.addEventListener('mouseover', mouseOver);
    // eye.addEventListener('mouseout', mouseOut);
    // center.addEventListener('mouseover', mouseOver);
    // center.addEventListener('mouseout', mouseOut);


    function mouseOver() {
        // center.innerHTML ='<animate attributeName="r" begin="0s" dur="1s" repeatCount="1" from="3" to="4"/>'
    }

    function mouseOut() {
        center.innerHTML = "";
    }
}

