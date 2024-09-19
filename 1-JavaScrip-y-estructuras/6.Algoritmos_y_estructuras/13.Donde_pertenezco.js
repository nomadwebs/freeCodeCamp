/*Dónde pertenezco
Devuelve el índice mas bajo en el que un valor (segundo argumento) debe ser insertado en un arreglo (primer argumento) 
una vez que éste haya sido ordenado. El valor devuelto debe ser un número.

Por ejemplo, getIndexToIns([1,2,3,4], 1.5) debe devolver 1 por que este valor es más grande que 1 (índice 0), 
pero menor que 2 (índice 1).

De esta forma, getIndexToIns([20,3,5], 19) debe devolver 2 porque una vez ordenado el arreglo, 
éste se verá así [3,5,20] y 19 es menor que 20 (índice 2) y mayor que 5 (índice 1).*/

function getIndexToIns(arr, num) {
    posicionOrden = 0;


    //primero ordenamos el array arr
    // Sintaxis ES5
    let array_ordenado = (arr.sort(function (a, b) {
        return a - b;
    }))
    console.log(array_ordenado);



    //Ahora buscamos el orden de num
    for (let i=0; i<array_ordenado.length; i++){
       // Si num es menor o igual al valor actual del arreglo, regresamos el índice i
        if (num <= array_ordenado[i]) {
        //if(num>array_ordenado[i]){
        //posicionOrden = i;
        return i;
       } 
    }
    
    // Si llegamos hasta aquí, significa que num es mayor que todos los valores en el arreglo
    return array_ordenado.length;
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 60));




/// Y AQUÍ SERÍA LO MISMO PERO ALGO MAS RESUMIDO Y CONDENSADO ///

function getIndexToIns2(arr, num) {
    arr.sort((a, b) => a - b);
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= num) return i;
    }
  
    return arr.length;
  }
  
  console.log(getIndexToIns2([30, 60, 40], 50));