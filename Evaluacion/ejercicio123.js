// Arreglo venta de Camila
var venCamila = new Array(32558, 36165, 34240, 39273, 34360, 21347, 20869, 21493, 23062, 31908, 30369, 30652);
// Arreglo venta de Franco
var venFranco = new Array(27520, 31480, 24053, 34823, 32942, 38477, 23756, 21413, 26699, 22045, 25625, 26855);
// Arreglo venta de Alicia
var venAlicia = new Array(20584, 33473, 34300, 24598, 33955, 24040, 39173, 25542, 25105, 26759, 29790, 36218);
// Arreglo de venta de Matias
var venMatias = new Array(27243, 38774, 21246, 30691, 24542, 39771, 31807, 31641, 20850, 29837, 37182, 28006);
// Arreglo de venta de Sandra
var venSandra = new Array(23334, 32687, 25217, 26844, 27033, 35244, 25702, 25781, 35525, 34874, 38842, 20562);
function maxVentas(name, ventas) {
    var maximaVenta = 0;
    var mesResultado = '';
    var semanaResultado = 1;
    for (var semana = 0; semana < ventas.length; semana++) {
        if (maximaVenta < venCamila[semana]) {
            maximaVenta = venCamila[semana];
            semanaResultado = semana;
            if (semana <= 3) {
                mesResultado = 'Enero';
            }
            else if (semana <= 7) {
                mesResultado = 'Febrero';
            }
            else {
                mesResultado = 'Marzo';
            }
        }
    }
    console.log(name, " El mes de ", mesResultado, "la semana; ", semanaResultado, "obtubo la mayor venta de:", maximaVenta);
}
maxVentas('Camila', venCamila);
maxVentas('Franco', venFranco);
maxVentas('Alicia', venAlicia);
maxVentas('Matias', venMatias);
maxVentas('Sandra', venSandra);
function minVentas(name, ventas) {
    var maximaVenta = 0;
    var mesResultado = '';
    var semanaResultado = 1;
    for (var semana = 0; semana < ventas.length; semana++) {
        if (semana == 0) {
            maximaVenta = venCamila[semana];
        }
        if (maximaVenta > venCamila[semana]) {
            maximaVenta = venCamila[semana];
            semanaResultado = semana;
            if (semana <= 3) {
                mesResultado = 'Enero';
            }
            else if (semana <= 7) {
                mesResultado = 'Febrero';
            }
            else {
                mesResultado = 'Marzo';
            }
        }
    }
    console.log(name, " El mes de ", mesResultado, "la semana; ", semanaResultado, "obtubo la menor venta de:", maximaVenta);
}
minVentas('Camila', venCamila);
minVentas('Franco', venFranco);
minVentas('Alicia', venAlicia);
minVentas('Matias', venMatias);
minVentas('Sandra', venSandra);
function promedioDeVentas(name, ventas) {
    var sumaTotal = 0;
    var promedio = 0;
    for (var index = 0; index < ventas.length; index++) {
        sumaTotal = sumaTotal + ventas[index];
    }
    promedio = sumaTotal / ventas.length;
    console.log("El promedio de ventas semanales para ", name, " es de:", promedio);
}
//ejercicio 3
promedioDeVentas('Camila', venCamila);
promedioDeVentas('Franco', venFranco);
promedioDeVentas('Alicia', venAlicia);
promedioDeVentas('Matias', venMatias);
promedioDeVentas('Sandra', venSandra);
