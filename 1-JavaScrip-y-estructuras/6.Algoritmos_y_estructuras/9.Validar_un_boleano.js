/*Boo who (Booleano Quién)
Comprueba si el valor está clasificado como booleano primitivo. Devuelve true o false.

Booleanos primitivos son true y false.*/



//ERRROR!!!! Este planteamiento es incorrecto, ya que haciendo esto 
//Estoy creando una variable x del tipo boolean y la evaluo
function booWhoE(bool) {
    let x = Boolean(bool);
    if(x){
        return bool;
    } else {
        return false;
    }
    
  }
  console.log(booWhoE("a"));


  //SOLUCIÓN: 

  function booWho(bool) {
    // Verificamos si el tipo de "bool" es un booleano
    if (typeof bool === "boolean") {
        return true;  // Es un booleano primitivo
    } else {
        return false;  // No es un booleano primitivo
    }
}

console.log(booWho(true));  // true
console.log(booWho(false)); // true
console.log(booWho("true")); // false (no es un booleano, es una cadena)
console.log(booWho(1));      // false (1 no es un booleano)
console.log(booWho(null));   // false (null no es un booleano)
