/*
*** Genera números enteros aleatorios con JavaScript
Puedes generar números decimales aleatorios con Math.random(), pero a veces es necesario generar números enteros aleatorios. El siguiente proceso te dará un número entero aleatorio menor que 20:

Usa Math.random() para generar un número decimal aleatorio.
Multiplica ese número decimal aleatorio por 20.
Usa Math.floor() para redondear este número hacia abajo a su número entero más cercano.
Recuerda que Math.random() nunca puede devolver un 1, así que es imposible obtener 20 ya que estás redondeando hacia abajo con Math.floor(). 
Este proceso te dará un número entero aleatorio en el rango de 0 a 19.

Poniendo todo junto, así es como se ve nuestro código:*/

console.log(Math.floor(Math.random() * 20));

/*Estás llamando a Math.random(), multiplicando el resultado por 20 y pasando el valor a la función Math.floor() para redondear el valor hacia abajo al número entero más cercano.*/


console.log(Math.random() * 20);

/*
Utiliza esta técnica para generar y devolver un número entero aleatorio entre 0 y 9.
*/
console.log(Math.floor(Math.random() * 10));

function randomRange(myMin, myMax) {
    let NumAleatorio = Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
    console.log("Numero aleatorio entre: " + myMin + " y " + myMax + " es: " + NumAleatorio);
}

randomRange (0, 9);