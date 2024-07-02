// EJERCICIO 9


const numbers = [1, 2, 3, 5, 45, 37, 58];


function sumNumbers(numberList) {
  let suma = numberList[0] + numberList[1] + numberList[2] + numberList[3] + numberList[4] + numberList[5] + numberList[6];

  return suma;
   
}

console.log(sumNumbers(numbers));

// Otra Forma



function sumNumbers(numberList) {
    suma = numberList.reduce(function (num, item){ 
      return num + item;
    })
    return suma; 
  }



function sumNumbers(numberList) {
    let res = numberList.reduce(( sum, item) => sum + item, 0);
  
    return res;
    
  }
  
  console.log(sumNumbers(numbers));


  // OTRA MAS

 
  function sumNumbers(numberList) {
    let total = 0 ;
   for (i = 0; i < numberList.length; i++){
    //let number = numberList[i] // le digo que number se quede con los resaultados de i 
    total = total + numberList[i]; // le digo que a la variable total se le sumen todos los numberList[i]
   }
  
   console.log(total);
    }
  
  sumNumbers(numbers)