//El método test valida que un string esté dentro de otro string.
//En este caso, result está evaluando myRegex dentro de la cadena myString
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Cambia esta línea
console.log(result);

//Otro ejemplo: 
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Cambia esta línea
let result2 = waldoRegex.test(waldoIsHiding);


//También podemos buscar y hacer coincidir multiples patrones
// En este caso Evauaremos 4 posibilidades
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Cambia esta línea
let result3 = petRegex.test(petString);
console.log(result3);

/*
Ignora la capitalización al coincidir
Hasta ahora, has visto expresiones regulares para hacer coincidir cadenas literales. 
Pero a veces, tal vez quieras hacer coincidir las diferencias de capitalización.

La capitalización (o también llamada capitalización de letra) es la diferencia entre mayúsculas y minúsculas. 
Ejemplos de mayúsculas son A, B y C. Ejemplos de minúsculas son a, b y c.

Puedes coincidir ambos casos utilizando algo llamado bandera. 
Existen otras banderas, pero aquí te centrarás en la que ignora la capitalización de las letras, la bandera i. 
Puedes usarla añadiéndola a la expresión regular. Un ejemplo de uso de esta bandera es /ignorecase/i. 
Esta expresión regular puede coincidir con las cadenas ignorecase, igNoreCase e IgnoreCase.
*/

//Usar el /i hace que ignore la capitalización y devolverá true aunque no sea igual
let myString2 = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Cambia esta línea
let result4 = fccRegex.test(myString);


/*
Haz coincidir cualquier cosa con el comodín punto
A veces no conoces (o no necesitas conocer) los caracteres exactos en tus patrones. Pensar en todas las palabras que coincidan, 
digamos, con una ortografía errónea llevaría mucho tiempo. Afortunadamente, puedes ahorrar tiempo utilizando el carácter de comodín: .

El carácter de comodín . coincidirá con cualquier carácter único. El comodín también es llamado dot y period. 
Puedes utilizar el carácter de comodín como cualquier otro carácter en la expresión regular. Por ejemplo, si quieres 
hacer coincidir hug, huh, hut, y hum, puedes usar la la expresión regular /hu./ para que coincida con las cuatro palabras.
*/
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr);
huRegex.test(hugStr);
/*
Ambas llamadas a test devolverán true.

Completa la expresión regular unRegex para que coincida con las cadenas run, sun, fun, pun, nun, y bun. 
Tu expresión regular debe usar el carácter de comodín.
*/

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Cambia esta línea
let result5 = unRegex.test(exampleStr);
console.log(result5);