/*Diferencia entre dos arreglos
Compara dos arreglos y devuelve un nuevo arreglo con los elementos que sólo se encuentran en uno de los dos arreglos dados, pero no en ambos. En otras palabras, devuelve la diferencia simétrica de los dos arreglos.

**Nota:**
Puedes devolver el arreglo con sus elementos en cualquier orden.*/

function diffArray(arr1, arr2) {

    // Filtramos los elementos que están en arr1 pero no en arr2
    const soloEn1 = arr1.filter(elemento => !arr2.includes(elemento));
    
    // Filtramos los elementos que están en arr2 pero no en arr1
  const soloEn2 = arr2.filter(elemento => !arr1.includes(elemento));

  //Combinamos los dos arrays con Concat

    const newArr = soloEn1.concat(soloEn2);;
    return newArr;
  }
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));