/*Busca y reemplaza
Realiza una búsqueda y reemplaza en la oración usando los argumentos proporcionados y devuelve la nueva oración.

El primer argumento es la frase sobre la que se va a realizar la búsqueda y el reemplazo.

El segundo argumento es la palabra que se reemplazará (antes).

El tercer argumento es lo que reemplazará el segundo argumento (después).

Note: Mantén la capitalización del primer carácter en la palabra original cuando lo estés reemplazando. 

Por ejemplo, si quieres reemplazar la palabra Book por la palabra dog, debe ser reemplazada como Dog
*/

function myReplace(str, before, after) {

    var arrayFrase = str.split(" ");
    let indexSustituye = 0;
    let salida = "";

    //Busco la palabra a sustituir
    for(i=0; i<arrayFrase.length; i++){
        if(arrayFrase[i].toLowerCase() === before.toLowerCase()){
            indexSustituye = i;
            
            if(verificaMays(arrayFrase[i]) === true){
                //Significa que la palabra a sustituir empieza por mayusculas
                //En este caso captializaremos la segunda.
                after = after[0].toUpperCase() + after.slice(1);
            } else {
                //En caso contrario nos aseguraremos que la segunda entre en minúsculas 
                after = after.toLowerCase();
            }
        }
    }
    if(indexSustituye !== 0){
        arrayFrase[indexSustituye] = after;
        salida = arrayFrase.join(" ");
    } else {
        return "No se encuentra la palabra a sustituir";
    }

    //función que verifica que la primera letra de la palabra comienza en mayusculas
    function verificaMays(palabra){
        return /^[A-Z]/.test(palabra);
    }


    return salida;
  }
  
  console.log(myReplace("I think we should look up there", "up", "Down"));