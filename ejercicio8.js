// Ejercicio 8

const avengers = ['Hulk', 'Thor', 'Iron Man', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord() {
    let higher = avengers[0]
    for (let i = 1; i < avengers.length; i++) {
      if (avengers[i].length > higher.length) {
        higher = avengers[i]
      }
    }
    return higher
  }
  
  console.log(findLongestWord(avengers));