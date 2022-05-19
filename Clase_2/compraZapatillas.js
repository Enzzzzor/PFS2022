"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var compraZapatillas = rls.questionInt("Ingrese precioInicial");
var precioInicial = 1900;
var descuentoTotal = 0.1;
var descuento = precioInicial * descuentoTotal;
var importeFinal = precioInicial - descuento;
console.log("precioInicial ", importeFinal);
