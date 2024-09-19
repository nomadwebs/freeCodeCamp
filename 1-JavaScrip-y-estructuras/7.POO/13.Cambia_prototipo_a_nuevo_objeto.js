/*Cambia el prototipo a un nuevo objeto
Hasta ahora, has estado agregando propiedades al prototype (prototipo) individualmente:

   >> Bird.prototype.numLegs = 2;

Esto se vuelve tedioso después de varias propiedades.

Bird.prototype.eat = function() {
  console.log("nom nom nom");
}

Bird.prototype.describe = function() {
  console.log("My name is " + this.name);
}

Una forma más eficiente es establecer el prototype a un nuevo objeto que ya contenga las propiedades. 
De esta forma, las propiedades son añadidas todas a la vez:


Bird.prototype = {
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

Agrega la propiedad numLegs, y los dos métodos eat() y describe() al prototype de Dog, estableciendo prototype a un nuevo objeto.
*/

function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype = {
     // Aquí estamos estableciendo un nuevo objeto como prototype
    numLegs: 4,                                     // Todos los perros tienen 4 patas
    eat: function(){
        console.log("Llamada al método Eat()");     // Acción de comer
    },
    describe: function(){                           // Describe el perro con su nombre
        console.log("Llamada al método Describe()");
    }
  };

  // Ejemplo de uso
let beagle = new Dog("Snoopy");
beagle.eat(); // nom nom nom
beagle.describe(); // My name is Snoopy
console.log(beagle.numLegs); // 4


/* --------------------------------------------------*/
/* Y aquí otro ejemplo para entender mejor este caso */
/* --------------------------------------------------*/

function Cat(alias, edad) {
    this.alias = alias;
    this.edad = edad;
}

Cat.prototype = {
    numPatas: 4,
    comer: function() {
        console.log(this.alias + " está comiendo.");
    },
    describir: function() {
        console.log("Mi nombre es " + this.alias + " y tengo " + this.edad + " años.");
    },
    maullar: function() {
        if(this.edad > 3) {
            console.log(this.alias + " maúlla fuerte porque es un gato adulto.");
        } else {
            console.log(this.alias + " maúlla suavemente porque es un gatito.");
        }
    }
};

// Ejemplo de uso
let siamese = new Cat("Felix", 4);
siamese.comer(); // Felix está comiendo.
siamese.describir(); // Mi nombre es Felix y tengo 4 años.
siamese.maullar(); // Felix maúlla fuerte porque es un gato adulto.
