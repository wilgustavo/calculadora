/*jslint node:true*/
/*globals describe, it, expect*/
'use strict';

var calc = require('../index');

describe("Reset.", function () {
    it("Se debe mostrar cero cuando aplico reset", function () {
        calc.reset();
        expect(calc.getDisplay()).toBe(0);
    });
    
    it("Si ingreso un uno y reset, debe mostrar cero", function () {
        calc.reset();
        calc.setDigito(1);
        calc.reset();
        expect(calc.getDisplay()).toBe(0);
    });
});

describe("Ingresar un dígito.", function () {
    it("Si ingreso cero, debe mostrar cero", function () {
        calc.reset();
        calc.setDigito(0);
        expect(calc.getDisplay()).toBe(0);
    });

    it("Si ingreso uno, debe mostrar uno", function () {
        calc.reset();
        calc.setDigito(1);
        expect(calc.getDisplay()).toBe(1);
    });
});
