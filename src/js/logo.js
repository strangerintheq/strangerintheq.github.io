var logo = document.querySelector('.logo');
var leftEye = logo.querySelector('#left-eye');
var rightEye = logo.querySelector('#right-eye');
module.exports = logo;

logo.addEventListener('mouseover', mouseOver);
logo.addEventListener('mouseout', mouseOut);

function mouseOver() {
    console.log(leftEye);
}

function mouseOut() {
    console.log(rightEye);
}