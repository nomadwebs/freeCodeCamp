// Esta seria una forma de fer-ho

let cadena = "Palomitas";
let str2 = "";

function reverseString(str) {
    
    for (let i=str.length; i>0; i--){
      str2 = str2 + str[i-1];
    }
    return str2;
  }
  
  console.log(reverseString(cadena));
