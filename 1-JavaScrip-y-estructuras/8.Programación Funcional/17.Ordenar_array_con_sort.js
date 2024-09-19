/*Ordena un arreglo alfabéticamente con el método sort
El método sort ordena los elementos de un arreglo de acuerdo a la función callback.

Por ejemplo:
*/
function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}

ascendingOrder([1, 5, 2, 3, 4]);
/*
Esto devolvería el valor de [1, 2, 3, 4, 5].

*/
function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}

reverseAlpha(['l', 'h', 'z', 'b', 's']);
/*
Esto devolvería el valor de ['z', 's', 'l', 'h', 'b'].

Por defecto, JavaScript ordena basándose en el valor "Unicode" de la cadena de caracteres, lo cual puede dar resultados inesperados. Por lo tanto, se recomienda proporcionar una función callback para especificar como se deben ordenar los elementos del arreglo. Cuando se proporciona dicha función callback, normalmente llamada compareFunction, los elementos del arreglo se ordenan de acuerdo al valor que devuelve la función compareFunction: Si compareFunction(a,b) devuelve un valor menor que 0 para dos elementos a y b, entonces a irá antes que b. Si compareFunction(a,b) devuelve un valor mayor a 0 para dos elementos a y b, entonces b irá antes que a. Si compareFunction(a,b) devuelve un valor igual a 0 para dos elementos a y b, entonces a y b se dejarán sin cambios.

EJERCICIO
---------
Utiliza el método sort en la función alphabeticalOrder para ordenar los elementos de arr en orden alfabético. La función debe devolver el arreglo ordenado.*/

function alphabeticalOrder(arr) {
    // Cambia solo el código debajo de esta línea
    return arr.sort(function(a, b) {
        return a.localeCompare(b);
    });
    // Cambia solo el código encima de esta línea
  }
  
  console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));


  /*

  1. Cómo funciona sort()
Por defecto, el método sort() en JavaScript convierte los elementos del arreglo a cadenas de texto (si no lo son ya) y luego los compara usando el valor Unicode de esos caracteres. Esto puede dar resultados inesperados cuando se trabaja con números u otros valores. Por eso es importante usar una función de comparación personalizada.

2. Funcionamiento de la función de comparación (compareFunction)
Cuando usamos sort() con una función de comparación, lo que hacemos es definir las reglas de cómo se deben ordenar los elementos. La función de comparación toma dos elementos como parámetros (a y b), y el valor que devuelve determina el orden de esos dos elementos:

Si devuelve un valor negativo, significa que a debe ir antes que b.
Si devuelve un valor positivo, significa que b debe ir antes que a.
Si devuelve 0, significa que a y b son equivalentes y no se necesita cambiar su orden.
3. Tu código y la corrección
En el ejercicio, estás trabajando con cadenas de texto, pero en tu código estás utilizando una operación aritmética (a - b), que es adecuada para números, no para cadenas de texto.

Para ordenar cadenas alfabéticamente, no necesitas restar valores como lo harías con números, sino simplemente comparar las cadenas. En JavaScript, puedes usar la función localeCompare() o directamente comparar las cadenas con a > b.

4. Solución correcta
Para ordenar el arreglo alfabéticamente, basta con comparar las cadenas directamente usando localeCompare() o a.localeCompare(b) para cadenas:

function alphabeticalOrder(arr) {
  // Cambia solo el código debajo de esta línea
  return arr.sort(function(a, b) {
    return a.localeCompare(b); // Compara cadenas alfabéticamente
  });
  // Cambia solo el código encima de esta línea
}

console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));
// Salida esperada: ["a", "a", "c", "d", "g", "z"]

Explicación:
localeCompare(): Compara dos cadenas de texto según el orden alfabético.
Si a es antes que b, devuelve un número negativo.
Si a es después que b, devuelve un número positivo.
Si son iguales, devuelve 0.
Al ejecutar este código, la salida será ["a", "a", "c", "d", "g", "z"], que es el arreglo ordenado alfabéticamente.

*/
