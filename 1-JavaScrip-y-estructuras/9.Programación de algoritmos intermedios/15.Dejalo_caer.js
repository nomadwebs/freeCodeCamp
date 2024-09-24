/*Déjalo caer

Dado el arreglo arr, itera y elimina cada elemento comenzando desde el primer elemento (el índice 0) hasta que la función func devuelva true cuando el elemento iterado se pasa a través de él.

Luego devuelve el resto del arreglo una vez que se cumpla la condición, de lo contrario, arr debe devolverse como un arreglo vacío.*/


/*AYUDA
Básicamente mientras el segundo argumento no sea verdadero, tendrás que eliminar el primer elemento de la izquierda del array que se pasó como primer argumento.
*/

function dropElements(arr, func) {

  let largoOriginal = arr.length;

  for (let i = 0; i < largoOriginal; i++) {
    //Comparamos siempre con el primer argumento de array
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
    //console.log(arr);
  }

  return arr;
}

console.log(dropElements([1, 7, 1], function (n) { return n < 3; }));


/*
PISTAS
- Pistas Pista 1 Puedes usar Array.prototype.shift() o filter con los que deberías estar más familiarizado para resolver este problema en unas pocas líneas de código. 

- Pista 2 Shift devuelve el elemento que fue eliminado que realmente no necesitamos, todo lo que necesitamos es el array modificado que queda. 

- Pista 3 Si todavía no puedes resolverlo con shift, entonces intenta resolverlo con filter, y comprueba cómo funciona filter, si te familiarizas con él, entonces puedes hacer el código con shift.
*/