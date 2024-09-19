/*Recuerda establecer la propiedad "constructor" al cambiar el prototipo
Hay un efecto secundario crucial de ajustar manualmente el prototipo a un nuevo objeto. 
¡Elimina la propiedad constructor! 

Esta propiedad puede ser usada para verificar cuál función de constructor creó la instancia. 
Sin embargo, dado que la propiedad ha sido sobrescrita, ahora devuelve resultados falsos:

    duck.constructor === Bird;
    duck.constructor === Object;
    duck instanceof Bird;

En orden, estas expresiones se evaluarían como false, true y true.

Para solucionar esto, cada vez que un prototipo se establece de forma manual a un nuevo objeto, recuerda definir la propiedad constructor:

    Bird.prototype = {
    constructor: Bird,  //Esto recuerda al prototipo el constructor original
    numLegs: 2,
    eat: function() {
        console.log("nom nom nom");
    },
    describe: function() {
        console.log("My name is " + this.name); 
    }
    };



EJERCICIO
---------
Define la propiedad constructor en el Dog prototype.
*/

function Dog(name) {
    this.name = name; // El constructor asigna el nombre cuando se crea una nueva instancia
}

Dog.prototype = {
    constructor: Dog,  // Restauramos la propiedad 'constructor' para que apunte a Dog
    numLegs: 4,        // Definimos el número de patas para los perros
    eat: function() {  // Definimos el método eat
      console.log("nom nom nom");
    },
    describe: function() {  // Definimos el método describe, que usa 'this' para acceder a la instancia
      console.log("My name is " + this.name);
    }
};

// Ejemplo de uso
let dogo = new Dog("Pamplona");
console.log(dogo);  // Muestra la instancia del perro 'Pamplona'
console.log(dogo.constructor === Dog);  // Muestra true porque 'constructor' está correctamente asignado

dogo.eat();  // Llamada al método eat: "nom nom nom"
dogo.describe();  // Llamada al método describe: "My name is Pamplona"
