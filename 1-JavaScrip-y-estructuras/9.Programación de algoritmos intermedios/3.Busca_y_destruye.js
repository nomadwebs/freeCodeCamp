/*Busca y destruye
Se te proporcionará un arreglo inicial como primer argumento de la función destroyer, seguido de uno o más argumentos. 
Elimina todos los elementos del arreglo inicial que tengan el mismo valor que estos argumentos.

La function debe aceptar un número indeterminado de argumentos, también conocida como función variádica. Puedes acceder a los argumentos adicionales añadiendo un parámetro restante a la definición de la función o utilizando el objeto arguments.*/

function destroyer(arr) {
    var arrayFiltrado = []; //Valor final

    var arrayInicial = arguments[0]; //Con arguments[0] seleccionamos el primer array de arr
    var arrayElementosBorrar = Object.values(arguments).slice(1); //Con esta segunda mitad devolvemos todos los argumentos hasta el final de arr. 
    console.log(arrayInicial);
    console.log(arrayElementosBorrar);

   
    for(let i=0; i<arrayInicial.length; i++){
        var eliminar = false;
        for (let j=0; j<arrayElementosBorrar.length; j++){
            if(arrayInicial[i] === arrayElementosBorrar[j]){
                eliminar = true;
            } 
        }
        if(!eliminar){
            arrayFiltrado.push(arrayInicial[i]);
        }
    }
    return arrayFiltrado;

}
  console.log("Array resultante filtrado: " + destroyer([1, 2, 3, 1, 2, 3], 1, 2, 5));





/*UNA OPCIÓN MUCHO MAS SIMPLE SERIA ESTA: */ 

function destroyer2(arr) {
    // Extraemos los elementos que hay que eliminar usando rest operator (...rest)
    var arrayElementosBorrar = Object.values(arguments).slice(1);
    
    // Filtramos el array inicial arr manteniendo solo los elementos que no están en arrayElementosBorrar
    var arrayFiltrado = arr.filter(function(el) {
        return !arrayElementosBorrar.includes(el);
    });

    return arrayFiltrado;
}

console.log("--------------- Resultado ejecución simplificada ----------");
console.log("Array resultante filtrado: " + destroyer2([1, 2, 3, 1, 2, 3], 9, 8, 5)); // [1, 2, 3, 1, 2, 3]
console.log("Array resultante filtrado: " + destroyer2([1, 2, 3, 1, 2, 3], 1, 2)); // [3, 3]



 /* function viewArgs() {
    return arguments;
}*/
/*console.log(viewArgs([3, 5, 1, 2, 2], 2, 5, 9));    
console.log(viewArgs([2, 3, 2, 3, 2, 3]));   
console.log(viewArgs(3,2,1,"life the universe and all"));
console.log(viewArgs("Douglas","Adams"));
console.log(viewArgs(["hello", "World!", 'and', 'thanks', 'for','all','the', 'fish'], "dolphines", 42));*/


