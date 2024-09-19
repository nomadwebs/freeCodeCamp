/*Itera sobre todas las propiedades
Ahora has visto dos tipos de propiedades: propiedades directas y propiedades prototype. 
Las propiedades directas se definen directamente en la propia instancia del objeto. 
Y las propiedades prototype se definen en el prototype.

*/
function Bird(name, color) {
  this.name = name;  //own property
  this.color = color;
}

Bird.prototype.numLegs = 2; // prototype property

let duck = new Bird("Donald");
/*

A continuación, se explica cómo se agregan las propiedades directas de duck al arreglo ownProps y las propiedades prototype al arreglo prototypeProps:

*/
let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) { //Si la propiedad es del constructor (de la instanacia) la añade al array
    ownProps.push(property);
  } else {
    prototypeProps.push(property); //En caso contrario será que se trata del prototype
  }
}

console.log("Propiedades de duck: " + ownProps);
console.log("Propiedades Prototype: " + prototypeProps);
console.log(ownProps) //debe mostrar ["name"] en la consola, y console.log(prototypeProps) debe mostrar ["numLegs"].
/*


EJERCICIO
---------
Agrega todas las propiedades directas de beagle al arreglo ownProps. Agrega todas las propiedades prototype de Dog al arreglo prototypeProps.*/

function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  let beagle = new Dog("Snoopy");
  
  let ownProps2 = [];
  let prototypeProps2 = [];
  
  // Cambia solo el código debajo de esta línea
  for(let propiedad in beagle){
    if(beagle.hasOwnProperty(propiedad)){
        ownProps2.push(propiedad);
    } else {
        prototypeProps2.push(propiedad);
    }
  }
  console.log(ownProps2);