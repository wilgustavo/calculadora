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

module.exports = calc;
