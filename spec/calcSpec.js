/*jslint node:true*/
/*globals describe, it, expect*/
'use strict';

var calc = require('../index');

describe("Reset", function () {
    it("Se debe mostrar cero cuando aplico reset", function () {
        calc.reset();
        expect(calc.getDisplay()).toBe(0);
    });
});
