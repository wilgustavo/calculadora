/*jslint node:true*/
'use strict';

var calc = {},
    display = 0;

calc.reset = function () {
    display = 0;
};

calc.getDisplay = function () {
    return display;
};

calc.setDigito = function (valor) {
    display = valor;
};

module.exports = calc;
