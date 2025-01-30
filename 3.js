function largestPrimeFactor(number) {
  if (isPrime(number)) {
    return number;
  }
  let maxPrime = 1;
  for (let i = 2; i <= number / 2; i++) {
    if (number % i === 0) {
      if (isPrime(number / i)) {
        return number / i;
      }
    }
  }
  return maxPrime;
}

function isPrime(number) {
  for (let i = 2; i <= number / 2; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(largestPrimeFactor(13195));
