/*jslint node:true*/
'use strict';

var calc = {},
    display = '',
    operando = '',
    acumulado = 0,
    prev = '';

calc.reset = function () {
    display = '';
    operando = '';
    acumulado = 0;
    prev = '';
};

calc.getDisplay = function () {
    return Number(display);
};

calc.setDigito = function (valor) {
    operando += valor;
    display = operando;
    prev = valor.toString();
};

calc.setPunto = function () {
    if (operando.length === 0) {
        operando = '0.';
    } else if (display.indexOf('.') < 0) {
        operando += '.';
    }
    display = operando;
    prev = '.';
};

calc.setIgual = function () {
    if (prev === '=') {
        return;
    }
    operando = '';
    acumulado += Number(display);
    display = acumulado.toString();
    prev = '=';
};

calc.setSuma = function () {
    acumulado += Number(display);
    operando = '';
    prev = '+';
};

module.exports = calc;
