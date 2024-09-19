/*Utiliza una IIFE para crear un módulo
Una expresión de función inmediatamente invocada (IIFE) se utiliza a menudo para agrupar la funcionalidad 
relacionada en un solo objeto o módulo. 
Por ejemplo, en el desafío anterior se definieron dos "mixins":
*/
function glideMixin(obj) {
  obj.glide = function() {
    console.log("Gliding on the water");
  };
}
function flyMixin(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  };
}
/*
Podemos agrupar estos mixins en un módulo:
*/
let motionModule = (function () {
  return {
    glideMixin: function(obj) {
      obj.glide = function() {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function(obj) {
      obj.fly = function() {
        console.log("Flying, wooosh!");
      };
    }
  }
})();
/*
Ten en cuenta que has invocado una IIFE que devuelve un objeto motionModule. 
El objeto devuelto contiene todos los comportamientos de los mixins como propiedades del objeto. 
La ventaja del patrón del módulo es que todos los comportamientos de movimiento pueden ser 
empaquetados en un solo objeto que puede ser usado por otras partes del código. 

Así se debe utilizar:
*/
// Declarar el objeto duck
let duck = { name: "Daffy" }; // Creamos un objeto llamado duck
motionModule.glideMixin(duck);
duck.glide();
/*


EJERCICIO
---------

Crea un módulo llamado funModule para envolver los dos mixins isCuteMixin y singMixin. 
funModule debe devolver un objeto.*/

// Mixins isCuteMixin y singMixin
let isCuteMixin = function(obj) {
    obj.isCute = function() {
      return true;
    };
};

let singMixin = function(obj) {
    obj.sing = function() {
      console.log("Singing to an awesome tune");
    };
};

// Crear el módulo funModule
let funModule = (function() {
    return {
        // Método que añade el mixin isCuteMixin a un objeto
        isCuteMixin: function(obj) {
            obj.isCute = function() {
                return true;
            };
        },
        // Método que añade el mixin singMixin a un objeto
        singMixin: function(obj) {
            obj.sing = function() {
                console.log("Singing to an awesome tune");
            };
        }
    };
})(); // <- Aquí estaba el problema de cierre del paréntesis

// Ejemplo de uso:

// Crear un objeto vacío
let myObject = {};

// Añadir ambos mixins al objeto usando funModule
funModule.isCuteMixin(myObject);
funModule.singMixin(myObject);

// Ahora podemos usar los métodos isCute() y sing()
console.log(myObject.isCute());  // Devuelve true
myObject.sing();                 // Imprime "Singing to an awesome tune"
