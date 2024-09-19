/*Verifica el constructor de un objeto con "instanceof"
Cada vez que una función constructora crea un nuevo objeto, se dice que ese objeto es una instancia de su constructor. 
JavaScript proporciona una manera conveniente de verificar esto con el operador instanceof. 
instanceof permite comparar un objeto con un constructor, devuelve true o false basado en si ese objeto fue creado o no con dicho constructor. 

Aquí hay un ejemplo:
*/
let Bird = function(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

let crow = new Bird("Alexis", "black");

crow instanceof Bird;
/*
Aquí el método instanceof devolverá true. //>>> Porque ha sido creado con el constructor Bird. <<< 


Si un objeto es creado sin usar un constructor, instanceof verificará que no es una instancia de ese constructor:
*/
let canary = {
  name: "Mildred",
  color: "Yellow",
  numLegs: 2
};

canary instanceof Bird;
/*

Aquí el método instanceof devolverá false porque no ha sido creado con el constructor. 

EJERCICIO:
---------
Crea una nueva instancia del constructor House, llamándola myHouse y pasando el número de habitaciones. 
Luego, usa instanceof para verificar que es una instancia de House.*/


function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  
  // Cambia solo el código debajo de esta línea

  //Esta devolverá True porque ha sido creada con el constructor.
let myHouse = new House(4);
console.log(myHouse instanceof House);


//En cambio aquí devolvemos false porque ha sido creada "a mano" sin usar el constructor. 
let myHome = {
    numBedrooms: 3
}
console.log(myHome instanceof House);

//Esto puede ser muy útil para saber de que constructor principal cuelga cada método. 