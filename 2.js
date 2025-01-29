function fiboEvenSum(n) {
  let firstNum = 1;
  let secondNum = 2;
  let sum = 2;
  let temp = 0;

  while (temp <= n) {
    temp = firstNum + secondNum;
    if (temp % 2 === 0) {
      sum += temp;
    }
    firstNum = secondNum;
    secondNum = temp;
  }

  return sum;
}

console.log(fiboEvenSum(8));
