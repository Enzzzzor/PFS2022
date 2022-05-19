"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var primerNumero = rls.questionFloat("Ingrese el primer numero:");
var segundoNumero = rls.questionFloat("Ingrese segundo numero:");
var tercerNumero = rls.questionFloat("Ingrese tercer numero:");
var mayorDetres;
if (primerNumero > segundoNumero && primerNumero > tercerNumero) {
    console.log("Mayor de tres es:", primerNumero);
}
else if (segundoNumero > primerNumero && segundoNumero > tercerNumero) {
    console.log("Mayor de tres es:", segundoNumero);
}
else
    console.log("Mayor de tres es:", tercerNumero);
