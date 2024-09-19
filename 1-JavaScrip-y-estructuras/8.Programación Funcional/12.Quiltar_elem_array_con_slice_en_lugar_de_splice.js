/*Remueve elementos de un arreglo usando slice en lugar de splice
Un patrón común al trabajar con arreglos es cuando deseas eliminar elementos y conservar el resto del arreglo. JavaScript ofrece el método splice para esto, que toma argumentos para el índice de dónde comenzar a eliminar elementos, luego la cantidad de elementos para eliminar. Si no se proporciona el segundo argumento, el valor predeterminado es eliminar elementos hasta el final. Sin embargo, el método splice muta el arreglo original en el que se llama. Por ejemplo:

const cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
cities.splice(3, 1);
Aquí splice devluelve la "string" London y la elimina del arreglo cities. cities tendrá el valor de ["Chicago", "Delhi", "Islamabad", "Berlin"].

Como vimos en el último desafío, el método slice no muta el arreglo original, pero devuelve uno nuevo que puede ser guardado en una variable. Recuerda que el método slice recibe dos argumentos para indicar el comienzo y el final del segmento (el final es no inclusivo) y retorna estos elementos en un nuevo arreglo. Usar el método slice en lugar de splice ayuda a prevenir cualquier efecto colateral de mutar un arreglo.


EJERCICIO
---------
Reescribe la función nonMutatingSplice usando slice en lugar de splice. 
Debe limitar el arreglo proporcionado cities a una longitud de 3 y devolver un nuevo arreglo con solo los primeros tres elementos.

No modifiques el arreglo original proporcionado en la función.*/

function nonMutatingSplice(cities) {
    let newCities = cities.slice(0, 3);

    return newCities;
  }

  const cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
  console.log(nonMutatingSplice(cities));