/*Convierte entidades HTML
Convierte los caracteres &, <, >, " (dobles comillas), y ' (apóstrofo), en un cadena con su correspondiente entidad HTML.*/

function convertHTML(str) {
    const caracteresEspeciales = {
        '&': "&amp;",
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&apos;', 
    };

    return str.replace(/([&<>\"'])/g, match => caracteresEspeciales[match]);

    /* EXPLICACIÓN
    [&<>"']: Los corchetes [ ] definen una "clase de caracteres", lo que significa que cualquiera de los caracteres dentro de los corchetes será un "match" (coincidencia). 
    En este caso, se busca coincidir con cualquiera de los caracteres especiales siguientes:

    &: El símbolo &.
    <: El símbolo <.
    >: El símbolo >.
    ": Las comillas dobles ".
    ': El apóstrofo '.
    Por lo tanto, la expresión regular coincide con cualquiera de estos cinco caracteres específicos.

    g: Es un modificador (o flag) que indica que la búsqueda debe ser global. Esto significa que la expresión regular buscará todas las apariciones de los caracteres en la cadena y no se detendrá después de la primera coincidencia.
    */
}

console.log(convertHTML("Schindler's List"));