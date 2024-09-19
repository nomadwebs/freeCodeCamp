/*Monito Trocitos
Escribe una función que divida un arreglo (primer argumento) 
en grupos de la longitud size (segundo argumento) y los devuelva como un arreglo bidimensional.*/

function chunkArrayInGroups(arr, size) {
    let resultado = [];  // Array que almacenará los subarreglos

    // Mientras haya elementos en el array arr
    for (let i = 0; i < arr.length; i += size) {
        // Cortamos el array en subarreglos de tamaño size y los añadimos al array resultado
        resultado.push(arr.slice(i, i + size));
    }

    return resultado;  // Devolvemos el array con los subarreglos
  }
  
  console.log(chunkArrayInGroups(["a", "b", "c", "d", "e", 1, 2, 3, 4, 5, 6, 7, 8, 9], 5));