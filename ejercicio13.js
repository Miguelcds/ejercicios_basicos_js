// Ejercicio 13


const names = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  
  
  
  function nameFinder(nameList, name) {
    
    const position = nameList.indexOf(name)
    if (position === -1) {
      console.log( false );
    } else {
      console.log(true, position + 1);
    }
      
    // const includes = nameList.includes(name)
  
  }
  
  
  nameFinder(names, "Jessica")