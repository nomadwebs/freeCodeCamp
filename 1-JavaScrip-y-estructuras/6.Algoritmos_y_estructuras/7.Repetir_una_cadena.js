/*Repite una cadena repite una cadena
Repite una cadena dada str (primer argumento) por un número (num) de veces (segundo argumento). 
Devuelve una cadena vacía si num no es un número positivo. Para este desafío, no utilices el método incorporado .repeat().*/

function repeatStringNumTimes(str, num) {
    let copia = str;
    str = "";
    if (num < 0){
        return "";
    } else {
        
        for(let i = 0; i<num; i++){
            str = str + copia;
        }
        return str;
    }
    
  }
  
  console.log(repeatStringNumTimes("hola manola", 10));


  //USANDO EL MÉTODO REPEAT QUEDARÍA ASÍ: 

  function repeatStringNumTimes2(str, num) {
    if (num < 0) {
        return "";
    }
    return str.repeat(num);  // Utilizamos el método .repeat()
}

console.log(repeatStringNumTimes2(" hola manola ", 10));
