function factorial(x) {
  if (x < 2) return 1;
  else return x * factorial(x - 1);
}

console.log(factorial(0));
