const myDog = {
    // Cambia solo el código debajo de esta línea
    "name": "Bobby",
    "legs": 4,
    "tails": 1,
    "friends": ["human", "ardillas"]
    // Cambia solo el código encima de esta línea
  };


  // Aquí accedemos a los valores del objeto
  // Configuración
const testObj = {
    hat: "ballcap",
    shirt: "jersey",
    shoes: "cleats"
  };
  
  // Cambia solo el código debajo de esta línea
  const hatValue = testObj.hat;      // Cambia esta línea
  const shirtValue = testObj.shirt;    // Cambia esta línea

  console.log(hatValue);
  console.log(shirtValue);


/*Accede a propiedades de objetos con notación de corchete
La segunda manera de acceder a las propiedades de un objeto es con la notación de corchetes ([]). 
Si la propiedad del objeto al que intentas acceder tiene un espacio en el nombre, necesitarás usar notación de corchetes.

Sin embargo, también puedes utilizar la notación de corchetes en las propiedades de objeto sin espacios.

Aquí hay un ejemplo de cómo usar la notación de corchetes para leer la propiedad de un objeto:

const myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};

myObj["Space Name"];
myObj['More Space'];
myObj["NoSpace"];
myObj["Space Name"] sería la cadena Kirk, myObj['More Space'] sería la cadena Spock, y myObj["NoSpace"] sería la cadena USS Enterprise.

Ten en cuenta que los nombres de las propiedades con espacios deben estar entre comillas (simples o dobles).
*/

// Configuración
const testObj2 = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };
  
  // Cambia solo el código debajo de esta línea
  const entreeValue = testObj2["an entree"];   // Cambia esta línea
  const drinkValue = testObj2["the drink"];    // Cambia esta línea

  /*
***** Accede a propiedades de objetos con variables
Otro uso de la notación de corchetes en objetos es acceder a una propiedad que está almacenada como el 
valor de una variable. Esto puede ser muy útil para iterar a través de las propiedades de un objeto o para acceder 
a una tabla de búsqueda.

Aquí hay un ejemplo del uso de una variable para acceder a una propiedad:

const dogs = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle"
};

const myDog = "Hunter";
const myBreed = dogs[myDog];
console.log(myBreed);
La cadena Doberman se mostrará en la consola.

Ten en cuenta que no utilizamos comillas alrededor del nombre de la variable cuando la usamos para acceder a la propiedad porque utilizamos el valor de la variable, no el nombre.
*/

//Asigna la variable playerNumber a 16. Luego, usa la variable para buscar el nombre del jugador y asignarlo a player.

// Configuración
const testObj3 = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  
  // Cambia solo el código debajo de esta línea
  const playerNumber = 16;  // Cambia esta línea
  const player = testObj3[playerNumber];   // Cambia esta línea

  console.log(player);


  