/*Donde estás
Crea una función que busque a través de un arreglo de objetos (primer argumento) y devuelva un arreglo de todos los objetos que tengan pares de nombre y valor coincidentes (segundo argumento). 
Cada par de nombre y valor del objeto fuente tiene que estar presente en el objeto de la colección si se va a incluir en el arreglo devuelto.

Por ejemplo, si el primer argumento es [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], y el segundo argumento es { last: "Capulet" }, entonces debes devolver el tercer objeto del arreglo (el primer argumento), porque contiene el nombre y su valor, el cual fue pasado como segundo argumento.*/

function whatIsInAName(collection, source) {

    //console.log(collection);
    //console.log(source);

    // arraySalida almacenará los objetos que cumplen con la condición
    let arraySalida = [];

    // arrayValoresBuscar es el primer argumento, que contiene el array de objetos (collection)
    let arrayValoresBuscar = arguments[0];

    // Iteramos sobre cada objeto del arrayValoresBuscar
    for (let i = 0; i<arrayValoresBuscar.length; i++){

        // Inicializamos una variable que indica si el objeto NO cumple los criterios
        let excluir = false;

        // Recorremos cada clave en el objeto 'source'
        for(const sourceOrigen in source) {

            // Si el valor del objeto actual (arrayValoresBuscar[i]) no coincide con el valor en 'source',
            // entonces marcamos excluye como true
            if(arrayValoresBuscar[i][sourceOrigen] !== source[sourceOrigen]) {
                excluir = true;
            }
        }

        // Si no se encontró ninguna diferencia (excluye es false),
        // añadimos el objeto actual al array de salida
        if(!excluir){
            arraySalida.push(arrayValoresBuscar[i]);
        }
    }
    return arraySalida;
    /*

    let result = arrayValoresBuscar.filter(first => first = source);
    console.log(result);
    */

}

console.log(whatIsInAName(
    [
        { first: "Romeo", last: "Montague" },
        { first: "Mercutio", last: null },
        { first: "Tybalt", last: "Capulet" }
    ], { first: "Capulet"}
));