// Configuración
const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

// Cambia solo el código debajo de esta línea
function updateRecords(records, id, prop, value) {

    // 1. Si el valor es una cadena vacía, eliminamos la propiedad
    if (value === "") {
        delete records[id][prop];
    }
    // 2. Si la propiedad no es "tracks" y el valor no está vacío, actualizamos o creamos la propiedad
    else if (prop !== "tracks" && value !== "") {
        records[id][prop] = value;
    }
    // 3. Si la propiedad es "tracks" y el valor no está vacío, debemos agregar la canción
    else if (prop === "tracks" && value !== "") {
        // 3a. Si "tracks" no existe, lo creamos como un array vacío
        if (records[id].hasOwnProperty("tracks") === false) {
            records[id][prop] = [];
        }
        // 3b. Agregamos la nueva canción (valor) al final del array "tracks"
        records[id][prop].push(value);
    }
    // 4. Devolvemos el objeto records modificado
    return records;

}

console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));