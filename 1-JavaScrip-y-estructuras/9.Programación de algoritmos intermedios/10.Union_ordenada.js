/*Unión ordenada
Escribe una función que tome dos o más arreglos y devuelve un nuevo arreglo de valores únicos manteniendo el orden original de los arreglos proporcionados.

En otras palabras, todos los valores presentes de todos los arreglos deben incluirse en su orden original, pero sin duplicados en el arreglo final.

Los números únicos deben ser ordenados según su orden original, pero el arreglo final no debe ordenarse según el orden numérico.

Revisa las pruebas de afirmación para ver ejemplos.*/

function uniteUnique(arr) {

    let argumentos = [...arguments]; //Al no saber cuantos argumentos nos pasaran usamos la nomenclatura de (3 puntos ...)
    let arrayFinal = [];

    //Bucle que itera sobre el array global
    for(let i = 0; i < argumentos.length; i++){

        //Bucle que itera sobre los subarrays u hace validaciones
        for(let j = 0; j<argumentos[i].length; j++){
            
            //La comparación clave es: Si el array final NO incluye el argumento leido por [i][j], hacemos un push. 
            if(!arrayFinal.includes(argumentos[i][j])){
                arrayFinal.push(argumentos[i][j]);
            }
        }
    }

    return arrayFinal;
  }
  
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1], [15, 2, 1, 8, 55, 7]));

  //1, 3, 2, 5, 4, 