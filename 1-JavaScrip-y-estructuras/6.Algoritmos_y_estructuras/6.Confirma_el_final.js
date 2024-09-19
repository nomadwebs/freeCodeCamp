/*Confirma el final
Evalúa si una cadena (primer argumento, str) termina con la cadena de destino dada (segundo argumento, target).

Este desafío puede resolverse con el método .endsWith(), que fue introducido en ES2015. 
Pero para el propósito de este desafío, nos gustaría que usaras uno de los métodos de subcadena de JavaScript en su lugar.
*/


//// AQUÍ ME HABÍA COMPLICADO LA VIDA Y ERA MUCHO MAS SENCILLO. 
/*function confirmEnding(str, target) {
    let largoTarget = target.length;
    let largoStr = str.length;
    let checkFinal = "";

    console.log(largoTarget);
    console.log(largoStr);
    console.log(str.indexOf(target));

    checkFinal = str.slice(str.indexOf(target),str.indexOf(target)+largoTarget);
    console.log(checkFinal);

    if(checkFinal === target){
        return true;
    } else {
        return false;
    }

    //return str;
  }
  
  console.log(confirmEnding("La felicidad acaba por empezar no", "n"));*/


//-------------------------
  //AQUÍ EL CÓDIGO CORRECTO

  function confirmEnding(str, target) {
    let largoTarget = target.length;
    let checkFinal = str.slice(-largoTarget);  // Usamos slice para extraer los últimos caracteres de la longitud del target
    //Usar la instrucción slice con valores negativos indica que empieza a contar desde el final de la cadena. 

    console.log(largoTarget);
    console.log(checkFinal);

    if (checkFinal === target) {
        return true;
    } else {
        return false;
    }
    
}

console.log(confirmEnding("La felicidad acaba por empezar nolotil", "now"));


//Y LA SOLUCIÓN MÁS ACTUAL Y MODERNA PARA ESTE EJERCICIO SERIA HACIENDO USO DEL MÉTODO .endsWith()

function confirmEnding2(str, target) {
    return str.endsWith(target);
    
}

console.log(confirmEnding2("La felicidad acaba por empezar nolotil", "lotil"));