const sum = (a, b) => {
  // return a + b;
  return `(${a} + ${b})`
}

const subtract = (a, b) => {
  // return a - b;
  return `(${a} - ${b})`;
}

const multiply =  (a, b) => {
  // return a * b;
  return `${a} * ${b}`;
}

const divide =  (a, b) => {
  //return a / b;
  return `${a} / ${b}`;
}
/* ho modificato i return per far vedere l'operazione matematica e non il risultato */
const log = () => {
  let operazMat = divide( subtract( multiply( sum(2, 4), sum(5, 2) ), 2), 5);
  console.log(operazMat);
}
log();