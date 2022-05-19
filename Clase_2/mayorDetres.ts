import * as rls from 'readline-sync'
let primerNumero: number= rls.questionFloat("Ingrese el primer numero:");
let segundoNumero: number= rls.questionFloat("Ingrese segundo numero:");
let tercerNumero: number= rls.questionFloat("Ingrese tercer numero:");
let mayorDetres: number;

if (primerNumero > segundoNumero && primerNumero > tercerNumero) {
    console.log ("Mayor de tres es:" , primerNumero);
} else 
if (segundoNumero > primerNumero && segundoNumero > tercerNumero ) {
    console.log ("Mayor de tres es:" , segundoNumero);
} 
else 
    console.log("Mayor de tres es:" , tercerNumero)



