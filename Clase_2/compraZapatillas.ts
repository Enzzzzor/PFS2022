import * as rls from 'readline-sync' ;
let compraZapatillas: number = rls.questionInt ("Ingrese precioInicial");
let precioInicial: number = 1900 ;
let descuentoTotal: number = 0.1;
let descuento:number = precioInicial*descuentoTotal;
let importeFinal: number = precioInicial- descuento;

console.log("precioInicial ", importeFinal);

