// Ejercicio 19


const toys = [
    {id: 5, name: 'Transformers'}, 
    {id: 11, name: 'LEGO'}, 
    {id: 23, name: 'Hot Wheels'}, 
    {id: 40, name: 'Rascador de gato'},
    {id: 40, name: 'FurReal Friends gato interactivo'},
    {id: 60, name: 'Nerf Blaster'},
    {id: 71, name: 'Sylvanian Families - Familia gato'}
  ];
  
  const toy = [];
  
  for (const item of toys) {
    if(item.name.includes("gato")){
    } else {
      // console.log(item)
      toy.push(item)
  }
  }

  console.log(toy);