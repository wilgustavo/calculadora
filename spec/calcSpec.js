/*jslint node:true*/
/*globals describe, it, expect*/
'use strict';

var calc = require('../index');
describe("Prueba de modulo y jasmine", function () {
    it("Contine llamada a un metodo de prueba", function () {
        expect(calc.prueba()).toBe('Hola dummy');
    });
});
