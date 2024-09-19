/*Agrega elementos al final de un arreglo utilizando concat en lugar de push
La programación funcional consiste en crear y utilizar funciones no mutantes.

En el reto anterior se introdujo el método concat como una forma de unir varios arreglos en uno nuevo sin alterar los arreglos originales. Compara concat con el método push. push añade elementos al final del propio arreglo sobre el que es invocado, alterando dicho arreglo. Aquí hay un ejemplo:

const arr = [1, 2, 3];
arr.push(4, 5, 6);
arr habría sido modificado a [1, 2, 3, 4, 5, 6], hecho que no cumple con los principios de la programación funcional.

concat ofrece una manera de unir nuevos elementos al final del arreglo sin ningún efecto colateral.

EJERCICIO
---------
Cambia la función nonMutatingPush de manera que utilice concat para unir newItem al final de original sin alterar los arreglos original o newItem. La función debe devolver un arreglo.
*/

function nonMutatingPush(original, newItem) {
    // Cambia solo el código debajo de esta línea
        //return original.push(newItem);
        let newArray = first.concat(second);
        return newArray;
  
    // Cambia solo el código encima de esta línea
  }
  
  const first = [1, 2, 3];
  const second = [4, 5];
  console.log(nonMutatingPush(first, second));