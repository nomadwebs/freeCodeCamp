/*Devuelve los números mayores en los arreglos
Devuelve un arreglo que consista en el mayor número de cada sub-arreglo proporcionado. Por simplicidad, el arreglo dado contendrá exactamente 4 sub-arreglos.

Recuerda, puedes iterar a través de un arreglo utilizando un simple bucle for, y acceder a cada miembro del arreglo con la sintaxis arr[i].*/



function largestOfFour(arr) {
    let maxNumerosArray = [];
    let maxSubArray;

    for(let i = 0; i<arr.length; i++){
        maxSubArray = arr[i][0];
        for(let j=0; j<arr[i].length; j++){
            if(arr[i][j] > maxSubArray){
                maxSubArray = arr[i][j];
            }
        }
        maxNumerosArray.push(maxSubArray);
    }

    return maxNumerosArray;
  }
  
  console.log(largestOfFour([[4, 5, 1, 30], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));