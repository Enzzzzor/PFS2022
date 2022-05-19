import * as rls from 'readline-sync';
let primerVuelta: number = rls.questionFloat ("Ingresar los segundos de la primera vuelta:");
let segundaVuelta: number = rls.questionFloat ("Ingresar los segundos de la segunda vuelta:");
let terceraVuelta: number = rls.questionFloat ("Ingresar los segundos de la tercera vuelta:");
let cuartaVuelta: number = rls.questionFloat ("Ingresar los segundos de la cuarta vuelta:");

let tiempoTotal: number = primerVuelta + segundaVuelta + terceraVuelta + cuartaVuelta;
let promedioVueltas: number = tiempoTotal/4

console.log("Los segundos totales de todas las vueltas es de:", tiempoTotal);
console.log ("Los segundos promedio de las vueltas es de:", promedioVueltas);
