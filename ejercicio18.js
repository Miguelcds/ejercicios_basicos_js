// Ejercicio 18

let placesToTravel = [
    { id: 5, name: "Japan" },
    { id: 11, name: "Venecia" },
    { id: 23, name: "Murcia" },
    { id: 40, name: "Santander" },
    { id: 44, name: "Filipinas" },
    { id: 59, name: "Madagascar" },
  ];
  
  let destinosFiltrados = [];
  
  // Bucle for para recorrer todos los destinos del array
  for (let i = 0; i < placesToTravel.length; i++) {
      // Verificar si el ID del elemento actual no es 11 ni 40
      if (placesToTravel[i].id !== 11 && placesToTravel[i].id !== 40) {
          // Agregar el elemento actual al array destinosFiltrados
          destinosFiltrados.push(placesToTravel[i]);
      }
  }
  
  console.log(destinosFiltrados);



  