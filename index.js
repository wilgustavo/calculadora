/*jslint node:true*/
'use strict';

var calc = {},
    display = '';

calc.reset = function () {
    display = '';
};

calc.getDisplay = function () {
    return Number(display);
};

calc.setDigito = function (valor) {
    display += valor;
};

calc.setPunto = function () {
    if (display.length === 0) {
        display = '0.';
    } else if (display.indexOf('.') < 0) {
        display += '.';
    }
};

module.exports = calc;
