/*Encuentra la palabra más larga en una cadena
Devuelve la longitud de la palabra más larga en la oración proporcionada.

Tu respuesta debe ser un número.*/

let arrayPalabras = [];
let maxWord = 0;

function findLongestWordLength(str) {
    arrayPalabras = str.split(" "); //Aquí separamos una cadena por palabras y la metemos en un array
    
    for (let i = 0; i<arrayPalabras.length; i++){
        if(arrayPalabras[i].length > maxWord){
            maxWord = arrayPalabras[i].length;
        }
        console.log(arrayPalabras[i] + " - " + maxWord);
    }
    return maxWord;
  }
  
  console.log(findLongestWordLength("May the force be with you"));