function sumSquareDifference(n) {
  let sumOfSquares = 0;
  let squareOfSum = 0;
  for (let i = 1; i <= n; i++) {
    sumOfSquares += i ** 2;
    squareOfSum += i;
  }

  return squareOfSum ** 2 - sumOfSquares;
}

console.log(sumSquareDifference(100));
