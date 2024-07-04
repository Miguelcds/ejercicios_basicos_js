// Ejercicio 21



const users = [
    { name: "Tony", years: 43 },
    { name: "Peter", years: 18 },
    { name: "Natasha", years: 14 },
    { name: "Bruce", years: 32 },
    { name: "Khamala", years: 16 },
  ];
  
  const mayores = [];
  
  const menores = [];
  
  for (const item of users) {
    if (item.years < 18) {
      menores.push(item.name)
   //   console.log( "Usuarios menores de edad:", item.name );
    } else  {
      mayores.push(item.name)
  //   console.log("Usuarios mayores de edad:", item.name );
    }
  }
  
  
  console.log( "Usuarios menores de edad:", menores);
  console.log( "Usuarios mayores de edad:", mayores);
  