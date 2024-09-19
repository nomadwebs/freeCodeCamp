/*Utiliza closures para evitar que las propiedades de un objeto se puedan modificar desde fuera
En el desafío anterior, bird tenía una propiedad pública name. 

Se considera pública porque se puede acceder y cambiar fuera de la definición de bird.

bird.name = "Duffy";
Por lo tanto, cualquier parte de tu código puede cambiar fácilmente el nombre "name" de bird a cualquier valor. 
Piensa en cosas como contraseñas y cuentas bancarias que se pueden cambiar fácilmente por cualquier 
parte de tu base de código. Eso podría crear muchos problemas.

La forma más sencilla de hacer privada esta propiedad pública es creando una variable dentro de la función constructora. 
Esto cambia el alcance de esa variable para que esté dentro de la función constructora versus disponible globalmente. 
De este modo, la variable solo puede ser accesible y cambiable por métodos que también estén dentro de la función 
constructora.
*/


function Bird() {
    // Definimos una variable privada, ya que está dentro del alcance de la función constructora.
    // Esta variable no es accesible desde fuera de la función Bird.
    let hatchedEgg = 10;
  
    // Definimos un método público dentro de la función constructora.
    // Este método tiene acceso a la variable privada `hatchedEgg` gracias al cierre (closure) de JavaScript.
    this.getHatchedEggCount = function() { 
      // Este método devuelve el valor de `hatchedEgg`, pero no lo expone directamente al exterior.
      return hatchedEgg;
    };
  }
  
  // Creamos una instancia de `Bird`.
  let ducky = new Bird();
  
  // Usamos el método público `getHatchedEggCount()` para acceder al valor privado `hatchedEgg`.
  console.log(ducky.getHatchedEggCount()); // Salida: 10
  
/*


Aquí getHatchedEggCount es un método privilegiado, porque tiene acceso a la variable privada hatchedEgg. 
Esto es posible porque hatchedEgg está declarada en el mismo contexto que getHatchedEggCount. 
En JavaScript, una función siempre tiene acceso al contexto en el que se creó. 
A esto se le llama closure.


EJERCICIO
---------
Cambia como weight es declarada en la función Bird para que sea una variable privada. 
Después, crea un método getWeight que devuelva el valor 15 para weight.*/

function Bird2() {
    let weight = 15;
  
    this.getWeight = function(){
      return weight;
    };
  }

  let littleBird = new Bird2();
  console.log(littleBird.getWeight());