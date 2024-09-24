/*Aplanadora
Aplana un arreglo anidado. Debes tener en cuenta los diferentes niveles de anidación.*/

function steamrollArray(arr) {
    let nuevoArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            //Si el elemento leido es un array, la función se llama a si misma con el elemento anidado.
            nuevoArray.push(...steamrollArray(arr[i]));
        } else {
            nuevoArray.push(arr[i]);

        }
    }
    return nuevoArray;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));

