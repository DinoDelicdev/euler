function isPrimary(number) {
  for (let i = 2; i < number / 2 + 1; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function nthPrime(n) {
  let numberOfPrimes = 1;
  let currentNumber = 1;
  if (n === 1) {
    return 2;
  }
  while (numberOfPrimes !== n) {
    currentNumber += 2;
    if (isPrimary(currentNumber)) {
      numberOfPrimes++;
    }
  }
  return currentNumber;
}

nthPrime(10001);
