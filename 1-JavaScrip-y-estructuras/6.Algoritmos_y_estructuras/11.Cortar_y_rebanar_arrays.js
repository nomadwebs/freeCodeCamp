/*Cortar y rebanar
Tienes dos arreglos y un índice.

Copia cada elemento del primer arreglo en el segundo arreglo, en orden.

Comienza insertando elementos en el índice n del segundo arreglo.

Devuelve el arreglo resultante. Los arreglos de entrada deben permanecer iguales luego de que se ejecute la función.*/

function frankenSplice(arr1, arr2, n) {
    // Creamos una copia del arreglo arr2 usando el método slice para no modificar el original
    let resultado = arr2.slice();  // slice() copia todo el arreglo
    
    // Usamos splice para insertar los elementos de arr1 en la copia de arr2 en la posición n
    // El primer argumento es el índice en el que queremos insertar
    // El segundo argumento es 0 porque no queremos eliminar ningún elemento de arr2
    // ...arr1 expande los elementos de arr1 en lugar de pasarlos como un solo arreglo
    resultado.splice(n, 0, ...arr1);

    // Devolvemos el arreglo resultado que contiene arr2 con los elementos de arr1 insertados
    return resultado;
  }
  
  console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));