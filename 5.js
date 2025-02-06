function isPrimary(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function findPrimeNumbers(number) {
  let primeFactors = [];
  for (let i = 2; i <= number; i++) {
    if (isPrimary(i)) {
      primeFactors.push(i);
    }
  }
  return primeFactors;
}

function findLargestPowerOfPrime(number, arrOfPrimes) {
  let largestPowersOfPrime = [];
  for (let i = 0; i < arrOfPrimes.length; i++) {
    let temp = {
      prime: arrOfPrimes[i],
      largestPowerOfPrime: 1,
    };
    for (let j = 2; Math.pow(arrOfPrimes[i], j) <= number; j++) {
      temp.largestPowerOfPrime = j;
    }
    if (temp.largestPowerOfPrime > 1) {
      largestPowersOfPrime.push(temp);
    }
  }
  return largestPowersOfPrime;
}

function smallestMult(n) {
  let primesUntilTheN = findPrimeNumbers(n);
  let largestPowersOfPrimes = findLargestPowerOfPrime(n, primesUntilTheN);
  largestPowersOfPrimes.forEach((prime) => {
    if (primesUntilTheN.includes(prime.prime)) {
      primesUntilTheN.splice(primesUntilTheN.indexOf(prime.prime), 1, Math.pow(prime.prime, prime.largestPowerOfPrime));
    }
  });
  return primesUntilTheN.reduce((acc, el) => {
    return acc * el;
  }, 1);
}

console.log(smallestMult(10));
