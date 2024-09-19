/*Aplicar programación funcional para convertir cadenas a slugs de URL
Los últimos desafíos abarcaban una serie de métodos útiles para arreglos y cadenas, que siguen los principios de la programación funcional. También hemos aprendido acerca de reduce, que es un poderoso método utilizado para reducir los problemas a formas más simples. Desde el cálculo de promedios a la ordenación, cualquier operación con arreglos puede lograrse si lo aplicamos. Recuerda que map y filter son casos especiales de reduce.

Combinemos lo que hemos aprendido para resolver un problema práctico.

Muchos sitios de gestión de contenidos (CMS) tienen los títulos de una publicación añadidos como parte de la URL con el simple propósito de ser marcadores. Por ejemplo, si escribes una publicación titulada Stop Using Reduce, es probable que la url tenga parte de este titulo en ella (.../stop-using-reduce). Puede que ya hayas notado esto en el sitio de freeCodeCamp.

Rellena la función urlSlug para convertir una cadena title y devolver la versión con guiones para la URL. Puedes utilizar cualquiera de los métodos vistos en esta sección y no utilices replace. Aquí están los requisitos:

La entrada es una cadena con espacios y palabras, en mayúsculas y minúsculas

El resultado es una cadena con los espacios entre palabras reemplazadas por un guion (-)

El resultado debe contener todas las letras minúsculas

El resultado no debe tener espacios*/


// Cambia solo el código debajo de esta línea
function urlSlug(title) {

    // 1. Convertimos la cadena a minúsculas
    // 2. Dividimos la cadena en palabras, separando por espacios
    // 3. Filtramos las palabras vacías o espacios adicionales
    // 4. Unimos las palabras con un guion "-"

    return title
        .toLowerCase()                // Convertir a minúsculas
        .trim()                       // Eliminar posibles espacios al principio o al final
        .split(/\s+/)                 // Dividir por cualquier cantidad de espacios
        .filter(Boolean)              // Filtrar palabras vacías
        .join('-');                   // Unir con guiones

}
// Cambia solo el código encima de esta línea
console.log(urlSlug("A Mind-Needs Books Like A Sword Needs A Whetstone"));


/*
Explicación:
title.toLowerCase(): Convierte la cadena a minúsculas.
title.trim(): Elimina espacios en blanco al inicio y al final de la cadena.
title.split(/\s+/): Divide la cadena en un arreglo de palabras, utilizando una expresión regular para capturar uno o más espacios en blanco como separadores.
filter(Boolean): Elimina cualquier elemento vacío que pueda haber quedado después de la división.
join('-'): Une las palabras con guiones.
*/