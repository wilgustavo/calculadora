/*jslint node:true*/
'use strict';

var calc = {},
    display = '',
    operando = '';

calc.reset = function () {
    display = '';
    operando = '';
};

calc.getDisplay = function () {
    return Number(display);
};

calc.setDigito = function (valor) {
    operando += valor;
    display = operando;
};

calc.setPunto = function () {
    if (operando.length === 0) {
        operando = '0.';
    } else if (display.indexOf('.') < 0) {
        operando += '.';
    }
    display = operando;
};

calc.setIgual = function () {
    operando = '';
};

module.exports = calc;
