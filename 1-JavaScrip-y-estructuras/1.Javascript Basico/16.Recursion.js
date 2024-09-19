/*¿Qué es la recursión?
La recursión es como un truco en programación donde una función se llama a sí misma para resolver un problema. Es similar a cuando te miras en un espejo que refleja otro espejo, y ves tu imagen repetida varias veces. La función sigue llamándose a sí misma hasta que alcanza una condición que le dice que se detenga.

Ejemplo con un bucle
Primero, imagina que tienes un arreglo de números y quieres multiplicar los primeros n números juntos. Normalmente, podrías usar un bucle para hacer esto:*/

function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
      product *= arr[i];
    }
    return product;
  }

console.log(multiply([1, 2, 3, 4, 5], 3));

/*
  Aquí, multiply toma un arreglo arr y un número n. El bucle recorre los primeros n elementos del arreglo, multiplicándolos uno por uno. Al final, obtienes el producto de esos elementos.

Recursión en lugar de un bucle
Ahora, en lugar de usar un bucle, puedes usar la recursión. Observa que:

multiply(arr, n) se puede pensar como multiply(arr, n - 1) * arr[n - 1].
Esto significa que podemos definir la función multiply en términos de sí misma:
*/

function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }
  console.log(multiply([1, 2, 3, 4, 5], 3));

/*
¿Cómo funciona esto?
Caso base: La función tiene una condición para detenerse, que es cuando n es menor o igual a 0 (n <= 0). En ese caso, devuelve 1. 
Este es el punto donde la función deja de llamarse a sí misma.

Llamada recursiva: Si n es mayor que 0, la función se llama a sí misma, pero con n - 1. Esto sigue hasta que n sea 0, y entonces comenzará a devolver los resultados.

Construcción de la solución: A medida que las llamadas se "devuelven" hacia atrás, los valores se multiplican hasta obtener el producto final.
*/

function sum(arr, n) {
    if (n <= 0) {
      return 0; // Caso base: si n es 0 o menor, la suma es 0
    } else {
      return sum(arr, n - 1) + arr[n - 1]; // Llamada recursiva sumando el elemento actual
    }
  }
  console.log(sum([10, 2, 3, 4, 5], 3));