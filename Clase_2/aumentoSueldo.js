"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
console.log("Bonificacion de sueldo en base a objetivos cumplidos");
var sueldoEmpleado = rls.questionFloat("Ingrese sueldo del empleado:");
if (sueldoEmpleado <= 15000) {
    var aumento = sueldoEmpleado * 0.2;
    console.log("Si su sueldo es es menor a $15000 tendra un aumento del 20% y sera de:", aumento);
}
else if (sueldoEmpleado >= 15001 && sueldoEmpleado <= 20000) {
    var aumento = sueldoEmpleado + sueldoEmpleado * 0.1;
    console.log("Si su sueldo es de entre $15001 y $20000 tendra un aumento del 10% y sera de:", aumento);
}
else if (sueldoEmpleado >= 20001 && sueldoEmpleado <= 25000) {
    var aumento = sueldoEmpleado + sueldoEmpleado * 0.05;
    console.log("Si su sueldo es de entre $20001 y $25000 tendra un mento del 5% y sera de:", aumento);
}
else if (sueldoEmpleado >= 25000) {
    console.log("Si su sueldo es mayor a 25000 no tendra aumento");
}
