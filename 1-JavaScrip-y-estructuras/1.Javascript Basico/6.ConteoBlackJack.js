let count = 0;

function cc(card) {
  // Cambia solo el código debajo de esta línea

  switch(card){
    case 2:
    case 3:
    case 4:
    case 5: 
    case 6:
      count += 1;
      break;
    case 7:
    case 8: 
    case 9:
      count += 0;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A": 
      count -= 1;
      break;
  }

  if(count>0){
    return count + " Bet";
  } else if (count <=0){
    return count + " Hold";
  }

  // Cambia solo el código encima de esta línea
}

console.log(cc(2)); 
console.log(cc(3)); 
console.log(cc(7)); 
console.log(cc('K')); 
console.log(cc('A'));