/*Recorta una cadena
Recorta una cadena (primer argumento) si es más larga que la longitud máxima proporcionada (segundo argumento). 
Devuelve la cadena recortada con un ... al final.*/

function truncateString(str, num) {
    let largoCadena = str.length;
    let cadenaOriginal = str;
    let puntosSuspensivos = "...";
    

    if(largoCadena > num){
        str = "";
        for(let i=0; i<num; i++){
            str = str + cadenaOriginal[i];
        }
        str = str + puntosSuspensivos;
    } else {
        return str;
    }
    return str;
  }
  
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", 25));



//La solución anterior es correcta, pero el siguiente enfoque es más eficiente usando el método slice().

function truncateString2(str, num) {
    if (str.length > num) {
        return str.slice(0, num) + '...';  // Usamos slice para recortar la cadena
    } else {
        return str;  // Si la cadena no necesita ser recortada, se devuelve tal cual
    }
}

console.log(truncateString2("A-tisket a-tasket A green and yellow basket", 25));
