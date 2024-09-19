//Función más básica de javascript
function reusableFunction(){
    console.log("Hi World");
  }

  reusableFunction();


// Aquí uso parámetros 
function functionWithArgs(num1, num2){
    console.log(num1 + num2);
  }
  
  functionWithArgs(12, 10);

// En este ejempolo utilizo la función return para devolver un valor fuera de la función
  function timesFive(num1){
    return num1 * 5;
  }
  const nuevoValor = timesFive(5);
  console.log(nuevoValor);