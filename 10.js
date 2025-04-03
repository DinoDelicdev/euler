function isPrimary(number) {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function primeSummation(n) {
  if (n < 2) {
    return "No primaries";
  }
  let currentNumber = 2;
  let currentSum = 2;
  while (currentNumber < n - 1) {
    currentNumber++;
    if (isPrimary(currentNumber)) {
      currentSum += currentNumber;
    }
  }
  return currentSum;
}

console.log(primeSummation(17));
