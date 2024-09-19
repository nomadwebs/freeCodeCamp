/*Spinal case
Convierte una cadena a spinal case. Spinal case significa todas-las-palabras-en-minúscula-unidas-por-guiones.*/

// 1. Convertimos la cadena a minúsculas
    // 2. Dividimos la cadena en palabras, separando por espacios
    // 3. Filtramos las palabras vacías o espacios adicionales
    // 4. Unimos las palabras con un guion "-"

function spinalCase(cadena){

    return cadena
        .replace(/([a-z])([A-Z])/g, "$1 $2") //este replace añade un espacio delante de cualquier palabra que empieza por mayusculas
        .toLowerCase()                // Convertir a minúsculas
        .trim()                       // Eliminar posibles espacios al principio o al final
        .split(/\s+|_+/g)             // Dividir por cualquier cantidad de espacios y filtrar los guiones bajos 
        .filter(Boolean)              // Filtrar palabras vacías
        .join('-');                   // Unir con guiones

}
// Cambia solo el código encima de esta línea
console.log(spinalCase("ThisIs Spinal Tap"));
