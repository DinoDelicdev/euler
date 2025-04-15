// Good for sum of two numbers

function findFirstIndexLargerThanNineWhichSumIsLessThenTen(firstNum, secondNum) {
  for (let i = 9; i < firstNum.length; i++) {
    if (Number(firstNum[i]) + Number(secondNum[i]) + 1 < 10) {
      return i;
    }
  }
  return firstNum.length - 1;
}

function largeSum(arr) {
  let indexOfFirstLessThenTenSum = findFirstIndexLargerThanNineWhichSumIsLessThenTen(...arr);
  let firstNDigitsOfFirstNumber = arr[0].slice(0, indexOfFirstLessThenTenSum + 1);
  let firstNDigitsOfSecondNumber = arr[1].slice(0, indexOfFirstLessThenTenSum + 1);
  let result = Number(firstNDigitsOfFirstNumber) + Number(firstNDigitsOfSecondNumber);
  console.log(Number(String(result).slice(0, 10)));
}

// Only change code above this line

const testNums = ["37107287533902102798797998220837590246510135740250", "46376937677490009712648124896970078050417018260538"];

largeSum(testNums);
