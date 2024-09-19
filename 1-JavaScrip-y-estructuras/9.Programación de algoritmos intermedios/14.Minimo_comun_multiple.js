/*
Mínimo común múltiplo
Encuentra el múltiplo común más pequeño de los parámetros proporcionados que pueden dividirse equitativamente por ambos, así como por todos los números consecutivos del rango entre estos parámetros.

El rango será un arreglo de dos números que no necesariamente estarán en orden numérico.

Por ejemplo, si se dan 1 y 3, encuentra el múltiplo común más pequeño de 1 y 3 que también es dividido por todos los números entre 1 y 3. 
La respuesta sería 6.
*/


/*NOTA AYUDA
MCM(a, b) = (a * b) / MCD(a, b)

Se lee como: el mínimo común múltiplo de a y b es el resultado de multiplicar a por b y dividir el resultado entre el máximo común divisor de a y b.

Así que vamos a necesitar estas dos funciones: la del MCM, y la del MCD.

Recuerda que el Máximo común divisor es el mayor número que divide a dos números de manera entera. 
*/


function smallestCommons(arr) {

    // Ordenamos los números en el rango
    const [min, max] = arr.sort((a, b) => a - b);

     // Función para calcular el máximo común divisor (MCD)
    const maximoComunDivisor = (a, b) => {
        let temporal; //Para no perder el valor de b.
        while (b !== 0){
            temporal = b;
            b = a % b;
            a = temporal;
        }
        return a;
    }

    // Función para calcular el mínimo común múltiplo (MCM)
    const minimoComunMultiple = (a, b) => (a * b) / maximoComunDivisor(a, b);

    // Inicializamos el MCM como el número más pequeño del rango
    let mcm = min;

    // Iteramos a través de todos los números en el rango y calculamos el MCM acumulado
    for (let i = min + 1; i <= max; i++) {
        mcm = minimoComunMultiple(mcm, i);
    }


    return mcm;
  }
  
  console.log(smallestCommons([2,9]));