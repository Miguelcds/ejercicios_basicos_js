// Ejercicio 23

const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },
    { name: "Spirited Away", durationInMinutes: 80 },  
    { name: "The Matrix", durationInMinutes: 136 },  
    { name: "Amélie", durationInMinutes: 110 },  
    { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
  ];
  
  let sMovie = [];
  
  let mMovie = [];
  
  let lMovie = [];
  
  for (const item of movies) {
    if( item.durationInMinutes < 100){
      sMovie.push(item.name)
    } else if(item.durationInMinutes > 100 && item.durationInMinutes < 200 ){
      mMovie.push(item.name)
    } else { 
     lMovie.push(item.name)
    }
  }
  
  console.log("Small Movie:", sMovie, "Medium Movie:", mMovie, "Largue Movie:", lMovie);