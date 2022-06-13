import * as rls from 'readline-sync' ;

function calcularAreaTriangulo (base: number , altura: number ): number {return(base*altura)/2

};

let i: number;
for (i=1; i<=50; i++) {
    console.log("El area es=" , calcularAreaTriangulo , i*2);

}