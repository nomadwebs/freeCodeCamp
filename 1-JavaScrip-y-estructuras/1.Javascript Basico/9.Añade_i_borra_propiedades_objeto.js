/*
**** Añade nuevas propiedades a un objeto de JavaScript
Puedes añadir nuevas propiedades a los objetos de JavaScript existentes de la misma manera que los modificarías.

Así es como podríamos agregar una propiedad bark a nuestro objeto ourDog:

ourDog.bark = "bow-wow";
o

ourDog["bark"] = "bow-wow";
Ahora cuando evaluemos ourDog.bark, obtendremos su ladrido, bow-wow.

Por ejemplo:

const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.bark = "bow-wow";
Añade una propiedad bark a myDog y establécela a un sonido de perro, como "woof". 
Puedes usar tanto la notación de puntos como la notación de corchetes.
*/

const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };

myDog.bark = "Guau guau!";

/*
******* Elimina propiedades en un objeto de JavaScript
También podemos eliminar propiedades de objetos de esta forma:

delete ourDog.bark;
Ejemplo:

const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.bark;
Después de la última línea mostrada anteriormente, ourDog se ve así:

{
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
}
Elimina la propiedad tails de myDog. Puedes usar tanto la notación de puntos como la notación de corchetes.

*/

// Configuración
const myDog2 = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Cambia solo el código debajo de esta línea
delete myDog2.bark;