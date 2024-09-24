/*Agentes binarios
Devuelve una frase traducida al inglés de una cadena binaria pasada.

La cadena binaria estará separada por espacios.*/

function binaryAgent(str) {

    let nuevoArray = str.split(" ");
    let ArrayChar = [];

    for (let i = 0; i < nuevoArray.length; i++) {

        ArrayChar.push(String.fromCharCode(parseInt(nuevoArray[i], 2)));

        /* la sentencia anterior la podríamos descomponer en las siguientes: 
            let binaryString = nuevoArray[i];               // Obtiene el binario en formato string, por ejemplo: "01000001"
            let decimalValue = parseInt(binaryString, 2);   // Convierte el binario a decimal (base 2 a base 10), por ejemplo: 65
            let character = String.fromCharCode(decimalValue);  // Convierte el decimal en un carácter ASCII, por ejemplo: "A"
            ArrayChar.push(character);                      // Agrega el carácter al array
        */

    }
    console.log(ArrayChar);

    return ArrayChar.join(""); //Unimos todos los carácteres de ArrayChar para devolver una frase
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));