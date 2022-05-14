function memoize(fn) {
  let cache = {};
  return function (arg) {
    if (arg in cache) {
      return `in cache : ${cache[arg]}`;
    } else {
      cache[arg] = fn(arg);
      return cache[arg];
    }
  };
}

function factorial(x) {
  if (x === 0) {
    return 1;
  }

  return x * factorial(x - 1);
}

factorial = memoize(factorial);
console.log(factorial(10));
console.log(factorial(6));
console.log(factorial(5));
