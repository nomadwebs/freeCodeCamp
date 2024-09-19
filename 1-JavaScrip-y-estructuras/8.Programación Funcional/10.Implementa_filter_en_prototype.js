/*Implementa el método filter en un prototipo
Puedes aprender mucho sobre el método filter si implementas tu propia versión. Se recomienda utilizar un bucle for o Array.prototype.forEach().

Escribe tu propio Array.prototype.myFilter(), que debe comportarse exactamente como Array.prototype.filter(). No debes utilizar el método incorporado filter. Se puede acceder a la instancia Array en el método myFilter usando this.*/

Array.prototype.myFilter = function(callback) {
    // Creamos un nuevo arreglo que almacenará los elementos filtrados
    const newArray = [];

     // Recorremos cada elemento del arreglo original
    for(let i=0; i<this.length; i++){
        // Si el resultado de la función callback es verdadero (truthy), añadimos el elemento al nuevo arreglo
       if(Boolean(callback(this[i], i, this)) === true){
        newArray.push(this[i]);
       } 
    }
    // Devolvemos el nuevo arreglo filtrado
    return newArray;
  };


// Ejemplo de cómo usar myFilter para probar su funcionamiento

// Definimos un arreglo de ejemplo
const numbers = [1, 2, 3, 4, 5, 6];

// Usamos el método personalizado myFilter para filtrar números pares
const evenNumbers = numbers.myFilter(function(number) {
    // El callback revisa si el número es par
    return number % 2 === 0;
});

console.log(evenNumbers); // Debería mostrar [2, 4, 6]

