import * as rls from 'readline-sync';

function dibujar(numero: number, simbolo: number) {
    let linea : string = simbolo.toString();
    for (i = 0; i <= numero; i++) {
        linea = linea + simbolo;
    };
    console.log(linea);
}

let i : number, linea : string;
let numero1 : number = rls.questionInt("Ingrese un número: "); ;
let numero2 : number = rls.questionInt("Ingrese un número: "); ;
let opcionMenu : number = rls.questionInt("Ingrese 1 para sumar, 2 para restar, cualquier tecla:");

if (opcionMenu==1) {
    dibujar(40,6);
    console.log ("El resultado es:" , numero1 + numero2);
    dibujar (40, 6);
} else {
    dibujar(30,1);
    console.log("El resultado es:" , numero1 - numero2);
    dibujar(30,3);
}
