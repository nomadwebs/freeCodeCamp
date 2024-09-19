/*Factoriza un número
Devuelve el factorial del entero proporcionado.

Si el número entero es representado con la letra n, un factorial es el producto de todos los enteros positivos menores o iguales a n.

Los factoriales suelen representarse con la abreviatura n!

Por ejemplo: 5! = 1 * 2 * 3 * 4 * 5 = 120

Sólo se proporcionarán a la función los enteros mayores o iguales a cero.
*/
let factorizarNum = 5;
let factorial = [];

function factorialize(num) {
    for(let i = 1; i<=num; i++){
        factorial.push(i);
    }
    num = 1;
    for (let j = 0; j< factorial.length; j++){
        num = num * parseInt(factorial[j]);
    }

    return num;
  }

  console.log("El factorial de " + factorizarNum + " es: " + factorialize(factorizarNum));
  console.log(factorial);