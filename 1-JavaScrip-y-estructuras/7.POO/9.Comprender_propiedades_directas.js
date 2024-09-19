/*Comprender las propiedades directas
En el siguiente ejemplo, el constructor Bird define dos propiedades: name y numLegs:
*/

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let duck2 = new Bird("Donald");
let canary2 = new Bird("Tweety");
/*

name y numLegs se llaman propiedades directas, porque están definidas directamente en la instancia del objeto. 
Eso significa que duck y canary tienen su propia copia separada de estas propiedades. 
De hecho, cada instancia de Bird tendrá su propia copia de estas propiedades. 
El siguiente código añade todas las propiedades directas de duck al arreglo ownProps:
*/

let ownProps2 = [];

for (let property2 in duck2) {
  if(duck2.hasOwnProperty(property2)) {
    ownProps2.push(property2);
  }
}

console.log(ownProps2);
/*

La consola mostrará el valor ["name", "numLegs"].



//EJERCICIO
//---------
Agrega todas las propiedades directas de canary al arreglo ownProps.*/

function Bird2(name, gender) {
  this.name = name;
  this.numLegs = 2;
  this.geneder = gender;
}

let canary = new Bird2("Tweety");
let ownProps = [];
// Cambia solo el código debajo de esta línea
for(let propiedad in canary){
  if(canary.hasOwnProperty(propiedad)){
    ownProps.push(propiedad);
  }
}
console.log(ownProps);