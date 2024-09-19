/*Utiliza un arreglo para almacenar una colección de datos
Lo siguiente es un ejemplo de la implementación más simple de una estructura de datos de un arreglo. Esto se conoce como un arreglo unidimensional, 
lo que significa que sólo tiene un nivel, o que no tiene otros arreglos anidados dentro de él. Observa que contiene booleanos, 
cadenas y números, entre otros tipos de datos válidos de JavaScript:
*/

let simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray.length);
//La llamada console.log muestra 7.

/*
Todos los arreglos tienen una propiedad de longitud, que como se muestra arriba, se puede acceder muy fácilmente con la sintaxis Array.length. 
A continuación se puede ver una implementación más compleja de un arreglo. Esto se conoce como un arreglo multidimensional, o 
un arreglo que contiene otros arreglos. Observa que este arreglo también contiene objetos JavaScript, 
que examinaremos muy de cerca en la siguiente sección, pero por ahora, todo lo que necesitas saber es que los arreglos también son capaces de almacenar objetos complejos.
*/
let complexArray = [
    //sub-array 1
    [
        //Objeto 1
        {
            one: 1,
            two: 2
        },
        //Objeto 2
        {
            three: 3,
            four: 4
        }
    ],
    //sub-array 2
    [
        //Objeto 1
        {
            a: "a",
            b: "b"
        },
        //Objeto 2
        {
            c: "c",
            d: "d"
        }
    ]
];

/*
Hemos definido una variable llamada yourArray. Completa la sentencia asignando un arreglo de al menos 5 elementos de longitud a la variable yourArray. 
Tu arreglo debe contener al menos una cadena (string), un número (number) y un booleano (boolean).
*/

let yourArray = ['Texto', 123, true, null, false];
console.log(yourArray);