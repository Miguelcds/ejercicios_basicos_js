
// Ejercicio 15

const products = ['Camiseta de Metallica', 'Pantalón vaquero', 'Gorra de beisbol', 'Camiseta de Basket', 'Cinturón de Orión', 'AC/DC Camiseta']




// for (let index = 0; index < products.length; index++) {
//   if (products[index].includes("Camiseta")) {
//     console.log(products[index]);
//   }

// }

for (const item of products) {
  if(item.includes("Camiseta")){
    console.log( "True:", item);
   } else {
    // console.log( "No camiseta:", item);
   }
 }