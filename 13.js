function largeSum(arr) {
  let digitsOfSum = [];
  let carryNumber = 0;
  for (let i = arr[0].length - 1; i >= 0; i--) {
    let sumOfDigitsOnIndex = 0;
    for (let j = 0; j < arr.length; j++) {
      sumOfDigitsOnIndex += Number(arr[j][i]);
    }
    sumOfDigitsOnIndex += carryNumber;
    //console.log(sumOfDigitsOnIndex);
    if (String(sumOfDigitsOnIndex).length > 1) {
      carryNumber = Number(String(sumOfDigitsOnIndex).slice(0, String(sumOfDigitsOnIndex).length - 1));
      digitsOfSum.unshift(String(sumOfDigitsOnIndex).slice(String(sumOfDigitsOnIndex).length - 1, String(sumOfDigitsOnIndex).length));
    } else {
      carryNumber = 0;
      digitsOfSum.unshift(String(sumOfDigitsOnIndex));
    }
  }
  if (carryNumber) {
    digitsOfSum.unshift(String(carryNumber));
  }

  return Number(digitsOfSum.join("").slice(0, 10));
}

const testNums = ["37107287533902102798797998220837590246510135740250", "46376937677490009712648124896970078050417018260538"];

console.log(largeSum(testNums));
