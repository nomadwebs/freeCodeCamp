/*Argumentos opcionales
Crea una función que sume dos argumentos. Si sólo se proporciona un argumento, entonces devuelve una función que espera un argumento y devuelve la suma.

Por ejemplo, addTogether(2, 3) debe devolver 5 y addTogether(2) debe devolver una función.

Si se llama a esta función devuelta con un solo argumento, se obtendrá la suma:

var sumTwoAnd = addTogether(2);
sumTwoAnd(3) devuelve 5.

Si cualquiera de los dos argumentos no es un número válido, devuelve undefined.*/

function addTogether() {
    var suma = 0

    if (arguments.length === 2) {
        if (typeof (arguments[0] === "number" || typeof (arguments[1] === "number"))) {
            var suma = arguments[0] + arguments[1]
            return suma
        } else if (arguments.length === 1) {
            return (second) => addTogether
        }

    }


    return suma;
}

console.log(addTogether(2, 3));