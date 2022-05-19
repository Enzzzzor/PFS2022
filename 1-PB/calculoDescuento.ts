import * as rls from 'readline-sync';
let precioInicial: number = 450.50;
let descuento: number = 0.1;
let preciioDescuento: number = precioInicial * descuento
let precioFinal: number = precioInicial - preciioDescuento;
console.log ("El precio final de este producto con descuento es de:", precioFinal)
