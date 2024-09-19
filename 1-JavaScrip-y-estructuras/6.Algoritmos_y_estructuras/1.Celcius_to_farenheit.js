let C = 60;
let F = 0;

function convertCtoF(celsius) {
    let fahrenheit = celsius *(9/5)+32;
    return fahrenheit;
  }
  
  F = convertCtoF(C);

  console.log(F);