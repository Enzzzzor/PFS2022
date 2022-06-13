"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var numero1 = rls.questionFloat("Ingrese un numero entero:");
var numero2 = rls.questionFloat("Ingrese otro numero:");
var actual, suma;
actual = numero1;
suma = 0;
while (actual <= numero2) {
    suma = suma + actual;
    actual++;
}
console.log("El resultado de la suma es: ", suma);
