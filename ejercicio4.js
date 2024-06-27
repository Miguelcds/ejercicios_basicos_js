// Ejercicio 4 

let precioBaseGlobal = 10000;


// Cambia el precio base en esta linea modificando la variable

precioBaseGlobal = 25000 ;

const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};

// Tu código para actualizar el precio final de cada nave aquí...

// Opcion 1


nave1.precioFinal = nave1.precioBase + precioBaseGlobal;

nave2.precioFinal = nave2.precioBase + precioBaseGlobal;


// console.log(nave1, nave2);


// Opcion 2 


let nav1Ac = nave1

let nav2Ac = nave2

nav1Ac = {nombre: "Ala-X", precioBase: 50000, precioFinal : nave1.precioBase + precioBaseGlobal};

nav2Ac = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal : nave2.precioBase + precioBaseGlobal};


// console.log(nav1Ac, nav2Ac);