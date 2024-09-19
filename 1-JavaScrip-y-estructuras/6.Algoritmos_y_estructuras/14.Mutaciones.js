/*Mutaciones
Devuelve true si la cadena de caracteres en el primer elemento del arreglo contiene todas las letras de la cadena en 
el segundo elemento del arreglo.

Por ejemplo, ["hello", "Hello"], debe devolver true porque todas las letras de la segunda cadena están presentes en la primera, 
ignorando mayúsculas o minúsculas.

Los argumentos ["hello", "hey"] deben devolver false porque la cadena hello no contiene y.

Finalmente, ["Alien", "line"], debe devolver true porque todas las letras de line están presentes en Alien.*/

function mutation(arr) { 

    arr[0] = arr[0].toLowerCase(); //el método toLowerCase() devuelve una nueva cadena, por eso estamos asignando el resultado de la operación al mismo elemento 
    arr[1] = arr[1].toLowerCase();
    //console.log(arr);

    for(let i=0; i<=arr[1].length-1; i++){
        if(arr[0].indexOf(arr[1][i]) === -1){
            return false;
        }
    }

    return true;
  }
  
  console.log(mutation(["hello", "elOlh"]));