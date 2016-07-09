(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var logo = require('./logo');
var header = document.querySelector('.header');

document.addEventListener('scroll', onScroll);
onScroll();
header.classList.remove('hidden');

module.exports = {
    init: function () {}      
};

function onScroll() {
    var scrolled = document.body.scrollTop > 100;
    var action = scrolled ? "add" : "remove";
    logo.classList[action]('logo-collapsed');
    header.classList[action]('header-collapsed');
}
},{"./logo":3}],2:[function(require,module,exports){
require('./header');

},{"./header":1}],3:[function(require,module,exports){
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
},{}]},{},[2]);
