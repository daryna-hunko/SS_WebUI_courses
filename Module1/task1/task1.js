function intBits(x) {
  let counter = 0;
  x = x.toString(2);
  for (let i of x) {
    i==1 ? counter++ : '';
  }
  return counter > 0 ? counter : '';
}

console.log(intBits(5));
