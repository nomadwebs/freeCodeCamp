// Configuración
const myArray = [];

// Cambia solo el código debajo de esta línea
let i=5;
while (i>=0){
  myArray.push(i);
  i--;
}
console.log(myArray);


// BUCLE FOR

// Configuración
const myArray2 = [];

// Cambia solo el código debajo de esta línea
for(let i=1; i<=5; i++){
  myArray2.push(i);
}

console.log(myArray2);

//Insertando impares en el array
// Configuración
const myArray3 = [];

// Cambia solo el código debajo de esta línea

for(let i=0; i<=9; i+=3){
  if(i===0){
    myArray3.push(1);
  }else{
    myArray3.push(i);
}
}
console.log(myArray3);



//Array restando numeros impares
// Configuración
const myArray4 = [];

// Cambia solo el código debajo de esta línea
for(let i=9;i>=1;i-=2){
  myArray4.push(i);
}
console.log(myArray4);




// Suma de un array
const myArr5 = [2, 3, 4, 5, 6];

// Cambia solo el código debajo de esta línea
let total = 0;

for(let i=0; i < myArr5.length; i++){
  total = total + myArr5[i];
}
console.log(total);




//Si tienes un arreglo multidimensional, puedes utilizar la misma lógica que aprendimos anteriormente para recorrer 
//tanto el arreglo como cualquier sub-arreglo. Aquí hay un ejemplo:

const arr = [
  [1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
//Esto imprime cada sub-elemento dentro de arr uno a la vez. Ten en cuenta que para el bucle interior, 
//estamos comprobando el .length de arr[i], ya que arr[i] es en sí mismo es un arreglo.

//Ejemplo multiplicación

function multiplyAll(arr) {
  let product = 1;
  // Cambia solo el código debajo de esta línea

   for (let i = 0; i < arr.length; i++){
     for (let j = 0; j < arr[i].length; j++){
       product *= arr[i][j];
     }
   }

  // Cambia solo el código encima de esta línea
  return product;
}
let valor_final = 0;
valor_final = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
console.log(valor_final);