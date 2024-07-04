// Ejercio 14

const words = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
];

function repeatCounter(list) {
  const result = {};

  list.forEach((value) => {
    result[value] = (result[value] || 0) + 1;
  });

  console.log(result);
}

repeatCounter(words);

function namess(list) {

  const result = {};

  for (const item of list) {
    
    if (result[item]) {
      result[item] += 1;
    } else {
      result[item] = 1;
    }
  
}
console.log(result);
}


namess(words)