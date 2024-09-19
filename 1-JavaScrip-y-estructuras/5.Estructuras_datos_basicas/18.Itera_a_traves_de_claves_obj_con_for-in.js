/*
Itera a través de las claves de un objeto con una sentencia "for...in"
En ocasiones, necesitas iterar todas las claves de un objeto. Puedes usar un bucle for...in para hacerlo. 

Un bucle for...in se ve así:
*/

const refrigerator = {
    'milk': 1,
    'eggs': 12,
};

for (const food in refrigerator) {
    console.log(food, refrigerator[food]);
}
/*
Este código saca por consola milk 1 y eggs 12, cada par clave-valor en su propia línea.

Definimos una variable food en la declaración del bucle, en cada iteración el valor de esta variable toma 
el valor una de las claves del objeto. De esta manera cada nombre de comida se escribe en la consola.

NOTA: Los objetos no mantienen un orden para las claves almacenadas como lo hacen los arreglos; 
por lo tanto, la posición de una clave en un objeto, o el orden relativo en el que aparece, 
es irrelevante cuando se hace referencia o se accede a esa clave.

Hemos definido una función countOnline que acepta un argumento, allUsers. 
Usa una sentencia for...in dentro de esta función para recorrer el objeto allUsers y devolver 
el número de usuarios que tienen la propiedad online igual a true. 

Un ejemplo del tipo de objeto que podría ser pasado a countOnline se muestra a continuación. 
Cada usuario tendrá una propiedad online con su valor igual a true o false.

{
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}
  */

const users = {
    Alan: {
        online: false
    },
    Jeff: {
        online: true
    },
    Sarah: {
        online: false
    }
}

function countOnline(allUsers) {
    // Cambia solo el código debajo de esta línea
    let contador = 0;
    for (let user in allUsers) {  // Itera sobre las claves de allUsers
        if (allUsers[user].online === true) {  // Accede a la propiedad 'online' de cada usuario
            contador += 1;
        }
    }
    return contador;
    // Cambia solo el código encima de esta línea
}

console.log(countOnline(users));
