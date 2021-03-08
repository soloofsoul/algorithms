// prime means - is divisible only on itself and 1

const isPrime = number => {
  let i;
  // if divisible on sqr then divisible to number
  for (i = 2; i * i <= number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

console.log(isPrime(11));