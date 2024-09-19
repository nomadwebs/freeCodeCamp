/* el bucle do while se diferencia del resto dada su naturaliza que el código siempre se ejecutará al menos una vez. 
Es decir, se entra en el código sin condición y se evalua al final.*/

// Configuración
const myArray = [];
let i = 10;

// Cambia solo el código debajo de esta línea
do {
  myArray.push(i);
  i++;
} while (i<10);

console.log(myArray);