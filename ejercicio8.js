// Ejercicio 8

const avengers = ['Hulk', 'Thor', 'Iron Man', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(stringslist) {
    let higher = stringslist[0];
    for (let i = 1; i < stringslist.length; i++) {
      if (stringslist[i].length > higher.length) {
        higher = stringslist[i]
      }
    }
    return higher
  }

  // console.log(findLongestWord(avengers));


  function findLongestWord(stringslist){
    let mayor = "";

    for (const item of stringslist) {
      if (item.length > mayor.length) {
        mayor = item
      }
    }
    console.log(mayor);
  }

  findLongestWord(avengers)