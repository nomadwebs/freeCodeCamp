/*Emparejamiento de ADN
El par de hebras del ADN esta formado por pares de nucleobases. 
Los pares de base son representados por los caracteres AT y CG, que forman bloques de doble hélix ADN.

A la cadena de ADN le falta el elemento de emparejamiento. Escribe una función que coincida con los pares de base faltantes para la hebra de ADN proporcionada. 

Para cada carácter de la cadena proporcionada, encuentra el carácter de par base. Devuelve los resultados como un arreglo 2d.

Por ejemplo, la entrada GCG, devuelve [["G", "C"], ["C","G"], ["G", "C"]]

El carácter y su par se emparejan en un arreglo, y todos los arreglos se agrupan en un arreglo encapsulado.*/

function pairElement(str) {

    var subArray = [];

    //Separamos el str en un array para poder recorrerlo mejor. 
    var arrayLetras = str.split("");


    //Recorremos el array asignando los pares recursivamente a subArray segun cada caso 
    for (let i = 0; i < arrayLetras.length; i++) {

        switch (arrayLetras[i]) {

            case "A":
                subArray.push(["A", "T"]);
                break;

            case "C":
                subArray.push(["C", "G"]);
                break;

            case "T":
                subArray.push(["T", "A"]);
                break;

            case "G":
                subArray.push(["G", "C"]);
                break;
        }


    }
    return subArray;
}

console.log(pairElement("GATACA"));