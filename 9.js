function specialPythagoreanTriplet(n) {
  let maxC = n / 2;
  for (let i = 1; i <= (n - maxC) / 2; i++) {
    for (let j = i + 1; j <= maxC; j++) {
      let cSquared = i ** 2 + j ** 2;
      if (Math.sqrt(cSquared) === Math.round(Math.sqrt(cSquared))) {
        let triplet = [i, j, Math.sqrt(cSquared)];
        console.log(triplet);
        if (i + j + Math.sqrt(cSquared) === n) {
          return i * j * Math.sqrt(cSquared);
        }
      }
    }
  }
}

console.log(specialPythagoreanTriplet(1000));
