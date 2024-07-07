// Ejercicio 22

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

healtyFood = 0;

for (const item of foodSchedule) {
  if( item.isVegan == false){
    item.name = fruits[healtyFood]
    healtyFood++;

  } 


  
}

 console.log(foodSchedule);