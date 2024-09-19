/*Así como las personas heredamos genes de nuestros padres, 
los objetos también heredan su prototype directamente de la función constructor que lo creó. 

Por ejemplo, aquí el constructor Bird crea el objeto duck:
*/
function Bird(name) {
  this.name = name;
}

let duck = new Bird("Donald");
/*
duck hereda su prototype de la función constructor Bird. 
Puedes mostrar esta relación con el método isPrototypeOf:
*/
Bird.prototype.isPrototypeOf(duck);
/*
Este devolvería true.


EJERCICIO 
----------
Utiliza isPrototypeOf para comprobar el prototype de beagle.
*/

function Dog(name) {
    this.name = name;
  }
  
  let beagle = new Dog("Snoopy");
  console.log(Dog.prototype.isPrototypeOf(beagle)); //Devuelve 'true' porque beagle es prototipo de dog.
  
  // Cambia solo el código debajo de esta línea