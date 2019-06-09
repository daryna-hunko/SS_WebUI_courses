function naturalNumbers(n, m) {
  if(!isFinite(n) || !isFinite(m) || n < 0 || m < 0) {
    return {status: 'failed', reason: 'some of paramerers is not correct'};
  }

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
console.log(naturalNumbers(-8, 4));