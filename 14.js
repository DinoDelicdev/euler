function longestCollatzSequence(limit) {
  let chainLengths = [undefined, undefined, 2];
  let maxLength = 2;

  for (let i = 2; i < limit; i++) {
    if (!chainLengths[i]) {
      let chain = [];
      let currentNumber = i;
      while (!chainLengths[currentNumber]) {
        chain.push(currentNumber);
        if (currentNumber % 2) {
          currentNumber = 3 * currentNumber + 1;
        } else {
          currentNumber = currentNumber / 2;
        }
      }
      if (chain.length + chainLengths[currentNumber] > maxLength) {
        maxLength = chain.length + chainLengths[currentNumber];
      }

      for (let i = 0; i < chain.length; i++) {
        chainLengths[chain[i]] = chain.length - i + chainLengths[currentNumber];
      }
    }
  }
  return chainLengths.indexOf(maxLength);
}

console.log(longestCollatzSequence(1000000));
