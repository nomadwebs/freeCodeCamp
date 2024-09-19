/*Rebote falsy
Elimina todos los valores falsos de un arreglo. Devuelve un nuevo arreglo; no alteres el arreglo original.

Los valores falsos en JavaScript son false, null, 0, "", undefined y NaN.

Sugerencia: Intenta convertir cada valor a booleano.*/


function bouncer(arr) {
    let copia = arr.slice(); // Hacemos una copia del arreglo original

    for (let i = 0; i < copia.length; i++) {
        // Evaluamos si el valor es "falsy", lo eliminamos si es así
        if (!copia[i]) {  // Si el valor es falsy
            copia.splice(i, 1);  // Eliminamos el elemento en el índice i
            i--;  // Retrocedemos el índice para evaluar el siguiente elemento correctamente
        }
    }

    return copia;  // Devolvemos el arreglo modificado
}

console.log(bouncer([7, "ate", "", false, 9]));  // Debería devolver [7, "ate", 9]