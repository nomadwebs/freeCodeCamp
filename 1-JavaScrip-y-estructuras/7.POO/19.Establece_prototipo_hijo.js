/*Establece el prototipo de hijo para una instancia del padre
En el desafío anterior, viste el primer paso para heredar el comportamiento del supertipo (o padre) Animal: 
creando una nueva instancia de Animal.

Este desafío cubre el siguiente paso: establecer el prototipo prototype del subtipo (o hijo) —en este caso, 
Bird— para ser una instancia de Animal.

Bird.prototype = Object.create(Animal.prototype);

Recuerda que el prototipo prototype es como la "receta" para crear un objeto. 
En cierto modo, la receta de Bird ahora incluye todos los "ingredientes" clave de Animal.

let duck = new Bird("Donald");
duck.eat();
duck hereda todas las propiedades de Animal, incluyendo el método eat.


EJERCICIO
---------
Modifica el código para que las instancias de Dog hereden de Animal.*/

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Cambia solo el código debajo de esta línea

Dog.prototype = Object.create(Animal.prototype);
let beagle2 = new Dog();



//-------------------------------------------------------------------------
//// SUPER EXPLICACIÓN /////
//-------------------------------------------------------------------------

/*
Para explicarlo de forma más visual, imagina la estructura de herencia como una cadena de relaciones entre clases 
(o funciones constructoras) que comparten propiedades y métodos.

Aquí te explico cada paso de forma sencilla:

Paso 1: Crear un supertipo (padre)
*/
function Animal() { }  // Esta es la "clase" padre o supertipo.

/*Animal es el constructor principal, que representa cualquier animal. 
Este constructor no tiene propiedades propias, pero su prototipo tendrá métodos que pueden ser 
compartidos por otras "clases" de animales.


Paso 2: Añadir métodos al prototipo de Animal
*/
Animal.prototype = {
  constructor: Animal,  // Mantiene la referencia al constructor correcto.
  eat: function() {  // Método común a todos los animales.
    console.log("nom nom nom");
  }
};

/*Aquí definimos el método eat en el prototipo de Animal. 
Cualquier "animal" que herede de Animal podrá usar este método, como los perros, gatos, etc.



Paso 3: Crear una subclase o "clase hija" llamada Dog
*/
function Dog() { }  // Este es el constructor para "Dog".
/*Dog es una subclase, que representa una categoría específica de animales (perros). 
En este punto, no tiene ningún método o propiedad específica, pero queremos que herede todo lo que está en Animal.


Paso 4: Hacer que Dog herede de Animal
*/
Dog.prototype = Object.create(Animal.prototype);  // "Hereda" del prototipo de Animal.
/*
Este código asegura que Dog hereda todos los métodos que están en el prototipo de Animal, 
como el método eat. Ahora, cualquier instancia de Dog puede usar los métodos definidos en Animal.


Paso 5: Crear una instancia de Dog
*/
let beagle3 = new Dog();  // Creamos un nuevo perro llamado 'beagle'.

/* beagle es una instancia de Dog, pero como Dog hereda de Animal, también puede usar el método eat 
que está definido en el prototipo de Animal.


Visualización del flujo de herencia:
------------------------------------

Animal (supertipo):
    Método: eat
        Dog (subtipo):
        Heredado del prototipo de Animal:
        Método: eat
            beagle (instancia de Dog):
            Puede acceder al método eat que proviene del prototipo de Animal.


En código:
---------------------------------------
*/
function Animal() { }  // Definimos el supertipo Animal.

Animal.prototype = {  // Agregamos métodos comunes a todos los animales.
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }  // Definimos el subtipo Dog.

// Hacemos que Dog herede del prototipo de Animal.
Dog.prototype = Object.create(Animal.prototype);

// Creamos una instancia de Dog.
let beagle = new Dog();

// Ahora, beagle puede usar el método eat heredado de Animal.
beagle.eat();  // "nom nom nom"



/*Resumen visual:
-----------------
Animal → contiene eat
    Dog → hereda eat de Animal
        beagle → instancia de Dog, usa eat de Animal

Este es un claro ejemplo de cómo funciona la herencia en JavaScript. 
Cada instancia de Dog puede usar los métodos definidos en Animal sin necesidad de repetir código.
*/