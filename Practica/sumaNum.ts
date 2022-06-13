import * as rls from 'readline-sync';

let numero1: number = rls.questionFloat("Ingrese un numero entero:");
let numero2: number = rls.questionFloat("Ingrese otro numero:");
let actual, suma: number;
actual= numero1;
suma = 0 ;
    while(actual<= numero2){
        suma= suma + actual;
        actual++;
    }
    console.log("El resultado de la suma es: " , suma);
    





