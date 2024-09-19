/*Restablece una propiedad "constructor" heredada

Cuando un objeto hereda el prototype de otro objeto, también hereda la propiedad del constructor del supertipo.

Por ejemplo:

function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor;

Pero duck y todas las instancias de Bird deberían mostrar que fueron construidas por Bird y no Animal. 

Para ello, puedes establecer manualmente la propiedad del constructor de Bird al objeto Bird:

Bird.prototype.constructor = Bird;
duck.constructor;



EJERCICIO
---------
Corrige el código para que duck.constructor y beagle.constructor devuelvan sus constructores respectivos.*/

function Animal() { }  // Clase padre o supertipo
function Bird() { }    // Clase hija Bird
function Dog() { }     // Clase hija Dog

Bird.prototype = Object.create(Animal.prototype);  // Hereda de Animal
Dog.prototype = Object.create(Animal.prototype);   // Hereda de Animal

// Creamos instancias de Bird y Dog
let duck = new Bird();
let beagle = new Dog();

// Verificación
console.log(duck.constructor);   // Animal
console.log(beagle.constructor); // Animal


// Cambia solo el código debajo de esta línea
Bird.prototype.constructor = Bird;  // Restablecemos el constructor para Bird
Dog.prototype.constructor = Dog;    // Restablecemos el constructor para Dog


// Verificación 2
console.log(duck.constructor);   // Bird
console.log(beagle.constructor); // Dog
