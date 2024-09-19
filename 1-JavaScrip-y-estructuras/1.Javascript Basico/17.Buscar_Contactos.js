// Configuración
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    // Cambia solo el código debajo de esta línea
    for (let i = 0; i < contacts.length; i++) {
      // Verificar si el nombre coincide
      if (contacts[i].firstName === name) {
        // Verificar si la propiedad existe en el contacto
        if (contacts[i].hasOwnProperty(prop)) {
          return contacts[i][prop]; // Devolver el valor de la propiedad solicitada
        } else {
          return "No such property"; // Propiedad no encontrada
        }
      }
    }
    return "No such contact"; // Contacto no encontrado

    // Cambia solo el código encima de esta línea
  }
  
  console.log(lookUpProfile("Kristian", "fdfdfd"));
