// Ejercicio 11 


const mixedElements = [6, 1, 'Marvel', 1, 'hamburguesa', '10', 'Prometeo', 8, 'Hola mundo'];


function averageWord(list) {

let counter = 0; // creo una variable que no contenga nada, es decir 0 pero tiene que ser un numero, ya que tenemos que usar valores numericos.

// realizo un bucle for que recorra cualquier array y el resultado lo meto en la variable item
 for (const item of list) {
  if (typeof item  === "string"){
  counter = counter + item.length; // le reasigno el valor a counter para que aumente a medida que el bucle recorra el array y recoja unicamente los elementos strings y los recorra dando la cantidad de palabras o huecos que ocupe y los sume consecutivamente  
 } else { // y todo lo que sea number lo suamremos directamente con el item numerico
  counter = counter + item;
 }

 }

 const average = counter / list.length;
  console.log(average);

 } 
 


averageWord(mixedElements)