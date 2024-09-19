/*Haz que la primera letra de una palabra este en mayúscula
Devuelve la cadena proporcionada con la primera letra de cada palabra en mayúsculas. 
Asegúrate de que el resto de la palabra esté en minúsculas.

Como propósito de este ejercicio, debes también usar mayúsculas conectando palabras como the y of.*/

function titleCase(str) {
    let arrayPalabras = str.split(" "); //Aquí separamos una cadena por palabras y la metemos en un array
    str = "";
    for(let i = 0; i<arrayPalabras.length; i++){
        str = str + arrayPalabras[i][0].toUpperCase() + arrayPalabras[i].substr(1).toLowerCase();

        // Capitalizamos la primera letra y concatenamos el resto en minúsculas
        //str += arrayPalabras[i][0].toUpperCase() + arrayPalabras[i].substr(1).toLowerCase();
    
        // Añadimos un espacio entre las palabras, excepto después de la última
        if (i < arrayPalabras.length - 1) {
            str += " ";
        }

    }
    return str;
  }
  
  console.log(titleCase("I'm a little tea pot"));