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

describe("Ingresar dos dígitos", function () {
    it("Si ingreso 1 y luego 1 se debe mostrar 11", function () {
        calc.reset();
        calc.setDigito(1);
        calc.setDigito(1);
        expect(calc.getDisplay()).toBe(11);
    });

    it("Si ingreso 0 y luego 1 se debe mostrar 1", function () {
        calc.reset();
        calc.setDigito(0);
        calc.setDigito(1);
        expect(calc.getDisplay()).toBe(1);
    });
});

describe("Punto decimal", function () {
    it("Si ingreso punto se debe mostrar 0", function () {
        calc.reset();
        calc.setPunto();
        expect(calc.getDisplay()).toBe(0);
    });

    it("Si ingreso 1 punto 1 se debe mostrar 1.1", function () {
        calc.reset();
        calc.setDigito(1);
        calc.setPunto();
        calc.setDigito(1);
        expect(calc.getDisplay()).toBe(1.1);
    });

    it("Si ingreso punto 1 se debe mostrar 0.1", function () {
        calc.reset();
        calc.setPunto();
        calc.setDigito(1);
        expect(calc.getDisplay()).toBe(0.1);
    });

    it("Si ingreso punto 0 y 1 se debe mostrar 0.01", function () {
        calc.reset();
        calc.setPunto();
        calc.setDigito(0);
        calc.setDigito(1);
        expect(calc.getDisplay()).toBe(0.01);
    });

    it("Si ingreso punto punto se debe mostrar 0", function () {
        calc.reset();
        calc.setPunto();
        calc.setPunto();
        expect(calc.getDisplay()).toBe(0);
    });
});
