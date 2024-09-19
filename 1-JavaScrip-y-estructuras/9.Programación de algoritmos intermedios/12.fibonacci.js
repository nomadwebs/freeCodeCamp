/*Suma todos los números impares de Fibonacci
Dado un entero positivo num, devuelve la suma de todos los números impares de Fibonacci que son menores o iguales a num.

Los dos primeros números de la sucesión de Fibonacci son el 0 y el 1. Cada número adicional en la secuencia es la suma de los dos números anteriores. Los siete primeros números de la sucesión de Fibonacci son 0, 1, 1, 2, 3, 5 y 8.

Por ejemplo, sumFibs(10) debe devolver 10 porque todos los números impares de Fibonacci menores o iguales a 10 son 1, 1, 3 y 5.*/

function sumFibs(num) {
    let siguienteNumero = 0;
    let arrayFibonacciImpares = [1];
    let arrayFibonacci = [0, 1]; //Iniciamos directamente el array con 0 y 1.


    while (siguienteNumero <= num) {
        //siguienteNumero = (arrayFibonacci.length-1 + arrayFibonacci.length-2);
        siguienteNumero = arrayFibonacci[arrayFibonacci.length - 1] + arrayFibonacci[arrayFibonacci.length - 2]; //Recogemos correctamente el valor del índice del array
        if (siguienteNumero > num) {
            break; //Si el siguiente numero > num paramos el bucle 
        }
        arrayFibonacci.push(siguienteNumero);

        if (siguienteNumero % 2 !== 0) {
            arrayFibonacciImpares.push(siguienteNumero); //Si el numero es impar lo añadimos al array de impares
        }
    }
    console.log("Fibonacci completo: " + arrayFibonacci);
    console.log("Fibonacci impares: " + arrayFibonacciImpares);


    //Ahora que tenemos toda la secuencia de fibonacci tendremos que filtrar solo los impares
    let resultadoImpares = 0;
    for (let i = 0; i < arrayFibonacciImpares.length; i++) {
        resultadoImpares += arrayFibonacciImpares[i];
    }

    //Una forma más elegante y eficiente de hacer la suma es:
    let resultadoImpares2 = arrayFibonacciImpares.reduce((acc, val) => acc + val, 0);
    console.log(resultadoImpares2);

    /*Teoria Reduce
    .reduce(): Es un método que aplica una función "reductora" a cada elemento de un array para reducirlo a un solo valor. En este caso, la función está sumando los elementos.

    Parámetros de .reduce():

    (acc, val): Son los dos argumentos que la función reductora utiliza:
    acc (acumulador): Es el valor que se acumula a medida que el método recorre el array.
    val (valor actual): Es el valor del elemento del array que se está procesando en cada iteración.
    acc + val: En cada iteración, se suma el valor del acumulador (acc) con el valor actual (val).
    , 0: El 0 al final es el valor inicial del acumulador. Si no lo especificas, el primer valor del array se toma como acumulador, pero al establecerlo en 0, empezamos desde 0 para la suma.
    */


    return resultadoImpares;
}

console.log(sumFibs(10));



/*LOGICA VIEJA CON LA QUE YO LA HABÍA LIADO*/

/*for (let i=0; i<=num; i++){
      siguienteNumero = 0;
      if(i===0){
          arrayFibonacci.push(i);
          siguienteNumero = 1;
          if(siguienteNumero % 2 !== 0){
              arrayFibonacciImpares.push(siguienteNumero);
          }
      } else if (i===1){
          arrayFibonacci.push(i);
          siguienteNumero = 2;
          if(siguienteNumero % 2 !== 0){
              arrayFibonacciImpares.push(siguienteNumero);
          }
      }else{
          //Si no estamos en las dos primeras posiciones, haremos las sumas de las posiciones anteriores. 
          siguienteNumero = (arrayFibonacci[i-2] + arrayFibonacci[i-1]);
          arrayFibonacci.push(siguienteNumero);

          if(siguienteNumero % 2 !== 0){
              arrayFibonacciImpares.push(siguienteNumero);
          }
      }
  }
  console.log (arrayFibonacci);
  console.log (arrayFibonacciImpares);*/