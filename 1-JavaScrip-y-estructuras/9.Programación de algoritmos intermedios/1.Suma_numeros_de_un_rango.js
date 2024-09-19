/*Suma todos los números en un rango
Te pasaremos un arreglo de dos números. Devuelve la suma de estos dos números más la suma de todos los números entre ellos. El número más bajo no siempre será el primero.

Por ejemplo, sumAll([4,1])> debe devolver 10 porque la suma de todos los números entre 1 y 4 (ambos incluidos) es 10.*/


/*La solución que propongo yo no está mal del todo aunque creo que el ejercicio no está bien explicado
del todo*/

function sumAll(arr) {

    let ValoresIntermedios = 0;
    let arrValoresIntermedios = []

    //Primero hacemos una copia del array original
    let newArrayOrdenado = arr.slice();

    //Ahora ordenamos el nuevo array
    newArrayOrdenado.sort(function (a, b) {
        return a - b;
    });

    //Ahora sacamos todo el array comprendido entre los valores pasado a la función
    for (let i = 0; i < newArrayOrdenado[1]; i++) {
        arrValoresIntermedios.push(i + 1);
    }

    //Y ahora que tenemos los valores intermedios los acumulamos a la variable ValoresIntermedios.
    for (let i = 0; i < arrValoresIntermedios.length; i++) {
        ValoresIntermedios += arrValoresIntermedios[i];
    }


    //Sumar valores que entran
    let sumaValores = 0;
    for (i = 0; i < arr.length; i++) {
        sumaValores += arr[i];
    }

    let valor_final = ValoresIntermedios + sumaValores;

    return valor_final;
}

console.log(sumAll([1, 4]));


//A CONTINUACIÓN PONGO LA SOLUCIÓN CORRECTA DEL EJERCICIO:

function sumAll2(arr) {
    //UTILIZAMOS LAS FUNCIONES Math para obtener los valores maximos y minimos.
    let max = Math.max(arr[0], arr[1]);
    let min = Math.min(arr[0], arr[1]);
    let sumBetween = 0;

    //Aquí simplemente acumulamos y no hace falta crear tanto array como he planteado en mi anterior ejercicio. 
    for (let i = min; i <= max; i++) {
        sumBetween += i;
    }
    return sumBetween;
}

console.log(sumAll2([1, 4]));