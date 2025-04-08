function findNumberOfDivisors(number) {
  let numberOfDivisors = 0;
  for (let i = 1; i < Math.sqrt(number); i++) {
    if (number % i === 0) {
      numberOfDivisors += 2;
    }
  }
  if (number % Math.sqrt(number) === 0) {
    numberOfDivisors++;
  }
  //console.log(numberOfDivisors);
  return numberOfDivisors;
}

function divisibleTriangleNumber(n) {
  let i = 1;
  let start = 0;
  while (true) {
    start += i;
    if (findNumberOfDivisors(start) > n) {
      return start;
    }
    i++;
  }
}

//console.log(findNumberOfDivisors(28));

console.log(divisibleTriangleNumber(500));
