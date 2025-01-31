function largestPalindromeProduct(n) {
  let largestNumberOfNDigits = "";
  for (let i = 0; i < n; i++) {
    largestNumberOfNDigits += "9";
  }
  let lowerLimit = Number(largestNumberOfNDigits) - Math.pow(10, 2) + 1;

  let factor1 = Number(largestNumberOfNDigits);
  let factor2 = Number(largestNumberOfNDigits);

  let product = factor1 * factor2;

  while (!isNumberPalindrome(product)) {
    if (factor2 < lowerLimit) {
      factor1--;
      factor2 = factor1;
    } else {
      factor2--;
    }

    product = factor1 * factor2;
  }

  return product;
}

function isNumberPalindrome(number) {
  if (String(number) === String(number).split("").reverse().join("")) {
    return true;
  }
  return false;
}

largestPalindromeProduct(2);
