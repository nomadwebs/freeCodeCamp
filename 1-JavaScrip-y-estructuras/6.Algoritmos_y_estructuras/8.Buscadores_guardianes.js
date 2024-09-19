/*Buscadores guardianes
Crea una función que recorra un arreglo arr y devuelva el primer elemento que pase un "detector de verdad". 
Esto significa que dado un elemento x, el "detector de verdad" es pasado si func(x) es true. 
Si ningún elemento pasa la prueba. la función debería devolver undefined.*/

function findElement(arr, func) {
    
    for(let i=0; i<arr.length; i++){
        // Si el "detector de verdad" (func) pasa con este elemento
        if(func(arr[i])){
            return arr[i];
        }
    }
    return undefined; // Si no se encuentra ningún elemento que pase la prueba, devolvemos undefined
  }
  
  console.log(findElement([1, 2, 3, 4], num => num % 2 === 0)); // Devuelve 2 (primer número par)

/*----------------------------------------*/

  //Ahora hago lo mismo sin función flecha para poder comparar 

  function findElement2(arr, divisor) {
    
    for(let i=0; i<arr.length; i++){
        // Si el "detector de verdad" (func) pasa con este elemento
        if(arr[i] % divisor === 0){
            return arr[i];
        }
    }
    return undefined; // Si no se encuentra ningún elemento que pase la prueba, devolvemos undefined
  }

  console.log(findElement2([1, 2, 3, 4], 2 )); // Devuelve 2 (primer número par)