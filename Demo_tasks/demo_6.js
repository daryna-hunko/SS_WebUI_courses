function naturalNumbers(n, m) {
  let naturalNumbersArray = [],
      numberI;

  numberI = Math.sqrt(m);
  numberI = Math.ceil(numberI);
  naturalNumbersArray.push(numberI);

  for (let i = 1; i < n; i++) {
    numberI += 1;
    naturalNumbersArray.push(numberI);
  }

  return naturalNumbersArray.join(', ');
}
console.log(naturalNumbers(8, 4));