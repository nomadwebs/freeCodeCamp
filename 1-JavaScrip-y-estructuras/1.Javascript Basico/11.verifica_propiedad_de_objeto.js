/*
Verifica las propiedades de un objeto
Para verificar si una propiedad de un objeto dado existe o no, puedes utilizar el método .hasOwnProperty(). 
someObject.hasOwnProperty(someProperty) devuelve true o false, dependiendo si la propiedad es encontrada en el objeto o no.

Por ejemplo:

function checkForProperty(object, property) {
  return object.hasOwnProperty(property);
}

checkForProperty({ top: 'hat', bottom: 'pants' }, 'top'); // true
checkForProperty({ top: 'hat', bottom: 'pants' }, 'middle'); // false
La primera llamada a la función checkForProperty devuelve true, mientras que la segunda llamada a la función devuelve false.

Modifica la función checkObj para probar si el objeto enviado al parámetro de función obj contiene la propiedad 
específica enviada al parámetro de función checkProp. 
Si la propiedad enviada a checkProp es encontrada en obj, devuelve el valor de esa propiedad. 
De lo contrario, devuelve Not Found.
*/

function checkObj(obj, checkProp) {
    // Cambia solo el código debajo de esta línea

    if (obj.hasOwnProperty(checkProp)){
        return obj.checkProp;
    }else {
        return "Not Found";
    }
    
    // Cambia solo el código encima de esta línea
  }

  console.log(checkObj(1, "hola"));