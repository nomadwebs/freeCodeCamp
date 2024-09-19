/*Suma todos los números primos
Un número primo es un número entero mayor que 1 con sólo dos divisores: 1 y el propio número. 
Por ejemplo, 2 es un número primo porque sólo es divisible entre 1 y 2. 
Por el contrario, 4 no es primo ya que es divisible entre 1, 2 y 4.

Reescribe sumPrimes para que devuelva la suma de todos los números primos que sean menores o iguales a num.*/

function sumPrimes(num) {

//1. Encontrar todos los numeros primos hasta num

let arrayPrimos = [];
let sumaPrimos = 0;

// El bucle debe ir hasta 'num' inclusive, por lo tanto, deberías usar `<= num` en lugar de `< num`
for(let i = 2; i<=num; i++){
    if(calculaSiEsPrimo(i)){
        arrayPrimos.push(i); //Si es primo lo añadimos al array 
    }
}
console.log("los numeros primos hasta " + num + " son: " + arrayPrimos);

//Definimos una función para calcular si el numero pasado el primo o no
function calculaSiEsPrimo(numero){
    for(let j = 2; j<= Math.sqrt(numero); j++){
        if(numero % j === 0){
            return false; // Si es divisible, no es primo
        }
    }
    return true; //Si llega hasta aquí es que no hay divisores, por tanto es primo
}

//2. Realizar la suma de estos numeros primos hasta num
sumaPrimos = arrayPrimos.reduce((acc, val) => acc + val, 0);

    return sumaPrimos;
  }
  
  console.log(sumPrimes(100));


  /* Explicación uso de la función Math.sqrt */

  /*Eficiencia con Math.sqrt:
En lugar de iterar desde 2 hasta n - 1, solo necesitas iterar desde 2 hasta la raíz cuadrada de n. Esto reduce drásticamente el número de operaciones necesarias, especialmente para números grandes.

Ejemplo:
Si n = 100, un bucle que va desde 2 hasta n - 1 realizaría 98 iteraciones.
Usando Math.sqrt(100) = 10, solo necesitas 9 iteraciones (de 2 a 10).
El número de iteraciones pasa de ser proporcional a n a ser proporcional a la raíz cuadrada de n, lo que es mucho más rápido a medida que los números crecen.*/