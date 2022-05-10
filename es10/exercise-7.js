function sumUntil(maxValue) {
  let somma = 0;
  /* non viene specificato se il valore passato è compreso nella somma o no */
  for (let i = 1; i <= maxValue; i++) { 
    somma += i;
  }
  return somma;
}

console.log(sumUntil(5));