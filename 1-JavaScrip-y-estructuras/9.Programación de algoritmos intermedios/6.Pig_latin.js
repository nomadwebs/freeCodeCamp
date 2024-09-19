/*Pig Latin (Latin de los cerdos)
Pig Latin (latin de los cerdos) es una manera de alterar las palabras en inglés. 

Las normas son las siguientes:

- Si una palabra comienza con una consonante, toma la primer consonante o grupo de consonantes, muévela al final de la palabra, y añade ay a ella.

- Si una palabra comienza con una vocal, solo añade way al final.

Traduce la cadena proporcionada a Pig Latin. 

Las cadenas de entrada están garantizadas como palabras en inglés en minúsculas.
*/

function translatePigLatin(str) {

    //Aquí evaluo que la palabra NO comience por una volcal
    function evaluaVocal(str){
        return /^[^aeiou]/i.test(str);  //El método .test lo utilizamos para evaluar si la cadenta str comple con la expresión regular. 
    }

    if(evaluaVocal(str) == true) {
        //Si devuelve true es que comienza por una consonante
        let primeraVocalIndex = str.search(/[aeiou]/i); //Aquí buscamos la posición de la primera vocal

        if(primeraVocalIndex === -1){ //si una palabra no tiene vocales
            return str + "ay"; //añadimos "ay" al final
        }

        //Concatenamos toda la palabra desde el índice de la primera vocal + primeros carácteres hasta la primera vocal + "ay"
        return str.slice(primeraVocalIndex) + str.slice(0, primeraVocalIndex) + "ay";
       

    }else{
        //sino es que estamos ante una vocal
        //Aquí concatenamos toda la palabra desde el 2o carácter + la vocal inicial + "way".
        
        return str + "way"
        
        //return str.slice(1) + str.slice(0, 1) + "way";
        
    }

    return str;
  }
  
  console.log(translatePigLatin("rhythm"));

/*
Paloma  -->  alomaPay
Amigo --> Amigoway
Arteria --> Arteriway
Cromototerapia --> omototerapiaCray
*/