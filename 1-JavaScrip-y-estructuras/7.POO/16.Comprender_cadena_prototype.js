/*Comprende la cadena "prototype"
Todos los objetos en JavaScript (con algunas excepciones) tienen un prototype. 
Además, el prototype de un objeto en sí mismo es un objeto.
*/
function Bird(name) {
  this.name = name;
}

typeof Bird.prototype;
/*

Debido a que prototype es un objeto, ¡un prototype puede tener su propio prototype! 
En este caso, el prototype de Bird.prototype es Object.prototype:

Object.prototype.isPrototypeOf(Bird.prototype);
¿Por qué sería útil? Quizás recuerdes el método hasOwnProperty del desafío pasado:
*/
let duck = new Bird("Donald");
duck.hasOwnProperty("name");
/*
El método hasOwnProperty se define en Object.prototype al cual se puede acceder con Bird.prototype, 
al que se puede acceder con duck. Este es un ejemplo de la cadena prototype. 
En esta cadena prototype, Bird es el supertype de duck mientras que duck es el subtype. 

Object es un supertype de Bird y duck. 
Object es un supertype de todos los objetos en JavaScript. 
Por lo tanto, cualquier objeto puede utilizar el método hasOwnProperty.


EJERCICIO 
----------
Modifica el código para mostrar la cadena de prototipos correcta.*/

function Dog(name) {
    this.name = name;
  }
  
  let beagle = new Dog("Snoopy");
  
  Dog.prototype.isPrototypeOf(beagle);  // produce true
  
  // Arregla el código de abajo para que evalúe a true
  Object.prototype.isPrototypeOf(Dog.prototype);



  /*EXPLICACIÖN VISUAL

  Object.prototype   --> Prototipo base de todos los objetos en JavaScript.
    ↑
    |
Dog.prototype     --> El prototipo de la función constructora Dog.
    ↑
    |
Dog               --> Función constructora (Dog).
    |
    ↓
beagle            --> Instancia de Dog, que hereda de Dog.prototype.


*/

/* Código con comentarios */
//--------------------------

function Dog2(name) {
    this.name = name;  // La propiedad 'name' se asigna a las instancias de Dog.
}

let beagle2 = new Dog2("Snoopy");  // Se crea una nueva instancia de Dog llamada beagle.

console.log(Dog2.prototype.isPrototypeOf(beagle2));  // true
// Esto verifica que Dog.prototype está en la cadena de prototipos de beagle.

console.log(Object.prototype.isPrototypeOf(Dog2.prototype));  // true
// Esto verifica que Object.prototype está en la cadena de prototipos de Dog.prototype.
