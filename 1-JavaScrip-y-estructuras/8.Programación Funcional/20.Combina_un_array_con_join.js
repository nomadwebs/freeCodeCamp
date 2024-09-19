/*Combina un arreglo en una cadena utilizando el método "join"
El método join se utiliza para unir los elementos de un arreglo creando una cadena de texto. Se necesita un argumento para especificar el delimitador a utilizar para separar los elementos del arreglo en la cadena.

Aquí hay un ejemplo:
*/
const arr = ["Hello", "World"];
const str = arr.join(" ");
/*
str tendrá una cadena con valor Hello World.

EJERCICIO
---------
Utiliza el método join (entre otros) dentro de la función sentensify para hacer una oración a partir de las palabras en la cadena str. La función debe devolver una cadena. Por ejemplo, I-like-Star-Wars se convertiría en I like Star Wars. Para este desafío, no utilices el método replace.*/

function sentensify(str) {
    // Cambia solo el código debajo de esta línea
  

    /*
    -------------------------------------------------------------------------
    ME HE COMPLICADO LA VIDA AL MAXIMO, DE TODAS FORMAS YA QUE LO HE ESCRITO
    NO VOY A BORRAR EL CÓDIGO YA QUE ME PEUDE SERVIR PARA EL FUTURO.
    -------------------------------------------------------------------------

    //Separamos el array
    let arraySeparado = str.split("-");
    console.log(arraySeparado);


    //Ponemos la primera letra en mayuscula
    let arrayCapitalizado = [];
    for(let i = 0; i<arraySeparado.length; i++){
        arrayCapitalizado = arrayCapitalizado + arraySeparado[i][0].toUpperCase() + arraySeparado[i].substr(1).toLowerCase();

        if (i < arraySeparado.length - 1) {
            arrayCapitalizado += " ";
        } else {
            arrayCapitalizado += ".";
          }
    
    }
    console.log(arrayCapitalizado);

    //Vuelo a separar arrayCapitalizado en un nuevo array
    let arrayCapitalizadoBueno = arrayCapitalizado.split(" ");
    console.log(arrayCapitalizadoBueno);


    //Hacemos un join del array
    let arrayJoined =  arrayCapitalizadoBueno.join(" ");
    

    //devolvemos el resultado final
    //return arrayJoined;
    */


    //ERA MUCHO MÁS SENCILLO
    return str.split(/\W/).join(" ");
  
    // Cambia solo el código encima de esta línea
  }
  
  console.log(sentensify("May-the-force-be-with-you"));