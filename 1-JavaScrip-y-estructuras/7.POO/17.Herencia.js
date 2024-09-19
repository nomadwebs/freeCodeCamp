/*Usa herencia para que no te repitas
Hay un principio en la programación llamado No te repitas (Don't Repeat Yourself "DRY"). 
La razón por la que el código repetido es un problema es porque cualquier tipo de cambio requiere 
corregir código en múltiples lugares. Esto suele significar más trabajo para los programadores y 
más espacio para errores.

Observa en el siguiente ejemplo como el método describe es compartido por Bird y Dog:
*/

/*
Así es como lo hemos hecho hasta ahora, esta bien, pero se puede mejorar usando la herencia. 

Bird.prototype = {
  constructor: Bird,
  describe: function() {
    console.log("My name is " + this.name);
  }
};

Dog.prototype = {
  constructor: Dog,
  describe: function() {
    console.log("My name is " + this.name);
  }
};
*/

/*
El método describe se repite en dos lugares. El código se puede editar para seguir el principio DRY 
creando un supertype (o padre) llamado Animal:
*/

/*
function Animal() { };

Animal.prototype = {
  constructor: Animal, 
  describe: function() {
    console.log("My name is " + this.name);
  }
};
*/

/*

Dado que Animal incluye el método describe, puedes eliminarlo de Bird y Dog:
*/

/*
Bird.prototype = {
  constructor: Bird
};

Dog.prototype = {
  constructor: Dog
};
*/

/*
EJERCICIO
---------

El método eat se repite tanto en Cat como Bear. 
Edita el código utilizando el principio DRY, moviendo el método eat al supertype Animal.*/

// Función constructora Cat. Esto se utiliza para crear instancias de gatos con la propiedad 'name'.
function Cat(name) {
    this.name = name;  // Asignamos la propiedad 'name' a cada instancia de Cat.
}
  
// Aquí establecemos el prototipo de Cat. El constructor de Cat se asigna, pero el método 'eat' no está aquí
// porque lo moveremos al supertipo Animal para evitar duplicación de código.
Cat.prototype = {
    constructor: Cat  // Aseguramos que el prototipo recuerde correctamente el constructor original de Cat.
    // El método 'eat' ha sido comentado porque lo vamos a heredar de Animal.
    // eat: function() {
    //     console.log("nom nom nom");
    // }
};
  
// Función constructora Bear. Esto se utiliza para crear instancias de osos con la propiedad 'name'.
function Bear(name) {
    this.name = name;  // Asignamos la propiedad 'name' a cada instancia de Bear.
}
  
// Establecemos el prototipo de Bear. El constructor de Bear se asigna, pero el método 'eat' no está aquí
// porque lo moveremos al supertipo Animal para seguir el principio DRY.
Bear.prototype = {
    constructor: Bear  // Aseguramos que el prototipo recuerde correctamente el constructor original de Bear.
    // El método 'eat' ha sido comentado porque lo vamos a heredar de Animal.
    // eat: function() {
    //     console.log("nom nom nom");
    // }
};
  
// Creamos un supertipo (o "padre") llamado Animal. Este será el prototipo de los tipos que comparten métodos comunes.
function Animal() { }
  
// Establecemos el prototipo de Animal, que será compartido por otras funciones constructoras como Cat y Bear.
// Aquí definimos el método 'eat', que será compartido por todas las instancias que hereden de Animal.
Animal.prototype = {
    constructor: Animal,  // El constructor de Animal se asigna para mantener la referencia correcta.
    
    // El método 'eat' se coloca aquí para que tanto Cat como Bear puedan usarlo, evitando duplicación.
    eat: function() {
        console.log("nom nom nom");  // Este es el comportamiento común que queremos compartir entre varias clases.
    }
};
