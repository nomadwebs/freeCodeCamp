/*Letras faltantes
Encuentra la letra que falta en la siguiente cadena de letras y devuélvela.

Si todas las letras están presentes en la cadena, devuelve undefined.
*/

function fearNotLetter(str) {

    //const abecedario = "abcdefghijklmnopqrstuvwxyz";
    
    var letraFalta = "";
    var charCode = "";

    for (let i=0; i<str.length; i++){
        //La función charCodeAt devuelve el código Unicode del carácter 
        //Ej. A=97, B=98, C=99...
        charCode = str.charCodeAt(i);
        
        //Tomamos el primer caráctes de str y comparamos los valores de la cadena
        //Si no coincide es que falta una letra
        if(charCode !== str.charCodeAt(0)+i){
            //console.log(charCode);
            //Al final, transformamos de Charcode a String la letra que falta.
            letraFalta = String.fromCharCode(charCode-1);

            //devolvemos la letra que falta y finalizamos la ejecución del For. 
            return letraFalta;
        }
        
    }
 
    
    //Si llega aquí es que no falta ninguna letra
    return undefined;
    
  }
  
  console.log(fearNotLetter("stvwx"));