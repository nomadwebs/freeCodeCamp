/*
Agrega elementos a un arreglo con push() y unshift()
La longitud de un arreglo, así como los tipos de datos que puede contener, no es fija. Los arreglos pueden ser definidos con la 
cantidad de elementos que se desee, y dichos elementos pueden ser agregados o removidos con el tiempo; en otras palabras, 
los arreglos son mutables. 
En este desafío, veremos dos métodos con los que podemos modificar un arreglo: 

***** Array.push() y Array.unshift(). *****

Ambos métodos toman uno o más elementos como parámetros y los agregan al arreglo que hizo la llamada; 

-- el método push() agrega los elementos al final del arreglo, 
-- el método unshift() los agrega al inicio. 

Considera lo siguiente:
*/

let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];

romanNumerals.unshift('XIX', 'XX');
//romanNumerals tendrá el valor ['XIX', 'XX', 'XXI', 'XXII'].

romanNumerals.push(twentyThree);
//romanNumerals tendrá el valor ['XIX', 'XX', 'XXI', 'XXII', 'XXIII']. 
//Ten en cuenta que también podemos pasar variables, que nos permiten una mayor flexibilidad en la modificación dinámica de los datos de nuestro arreglo.

/*
Hemos definido una función, mixedNumbers, a la cual le estamos pasando un arreglo como argumento. 
Modifica la función utilizando push() y unshift() para agregar 'I', 2, 'three' al principio del arreglo y 7, 'VIII', 9 al final, 
de tal modo que el arreglo devuelto contenga las representaciones de los números del 1 al 9 en orden.
*/

function mixedNumbers(arr) {
    // Cambia solo el código debajo de esta línea
    arr.unshift('I', 2, 'three'); //Para agregar array al inicio
    arr.push(7, 'VIII', 9); //Para agregar array al final

    // Cambia solo el código encima de esta línea
    return arr;
  }
  
  console.log(mixedNumbers(['IV', 5, 'six']));
