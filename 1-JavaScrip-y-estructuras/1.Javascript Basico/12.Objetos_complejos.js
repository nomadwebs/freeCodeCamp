/*Manipulando objectos complejos
A veces, es posible que desees almacenar datos en una estructura de datos flexible. Un objeto de JavaScript es una forma de manejar datos flexibles. Permiten combinaciones arbitrarias de cadenas, números, booleanos, arreglos, funciones, y objetos.

Este es un ejemplo de una estructura de datos compleja:

const ourMusic = [
  {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [ 
      "CD", 
      "Cassette", 
      "LP"
    ],
    "gold": true
  }
];
Esto es una arreglo que contiene un objeto en su interior. El objeto tiene varias piezas de metadatos sobre un álbum. También tiene un arreglo anidado de formats. Si desea añadir más registros de álbumes, puede hacerlo añadiendo registros a la parte superior del arreglo. Los objetos almacenan datos en una propiedad, con formato clave-valor. En el ejemplo anterior, "artist": "Daft Punk" es una propiedad que tiene como clave artist y su valor es Daft Punk.

Nota: Deberás colocar una coma después de cada objeto en el arreglo, a menos que sea el último objeto.
*/

const myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    },
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
          "CD",
          "8T",
          "LP"
        ],
        "gold": true
      }
  ];

/*
 *** Accede a objetos anidados
Se puede acceder a las sub propiedades de objetos encadenando la notación de puntos o corchetes.

Aquí hay un objeto anidado:

const ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};

ourStorage.cabinet["top drawer"].folder2;
ourStorage.desk.drawer;
ourStorage.cabinet["top drawer"].folder2 sería la cadena secrets y ourStorage.desk.drawer sería la cadena stapler.

Accede al objeto myStorage y asigna el contenido de la propiedad glove box a la variable gloveBoxContents. 
Utiliza la notación de puntos para todas las propiedades cuando sea posible, de lo contrario utiliza la notación de corchetes.
*/
const myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
  
  const gloveBoxContents = myStorage.car.inside["glove box"];
  console.log(gloveBoxContents);


  //Using dot and bracket notation, set the variable secondTree to the second element in the list array from the second object in the myPlants array.
const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1]; //Aquí agafo el segon element de la llista del segon objecte de l'array myPlants
console.log(secondTree);