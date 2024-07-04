// Ejercicio 12

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];


  function removeDuplicates(list) {

   let remDuplicates = "";

   for (const item of list) {

    if (remDuplicates.includes(item)){
      remDuplicates = remDuplicates ;
    } else {
      remDuplicates = remDuplicates + item + ", ";
    }

    }
    console.log(remDuplicates);
   }


   removeDuplicates(duplicates)