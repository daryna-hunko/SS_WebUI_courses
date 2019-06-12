function maxValue(n) {
let err,
    res,
    now3 = 0,
    now2 = 0,
    arr = [];
  err = checkUp(n, err);
  if (err == true) {
    res = 'Wrong input';
  } else {
    now3 = Math.floor(n/3);
    now2 = (n-now3*3)%2;
    if (now2 == 1) {
      now3--;
      now2 = 2;
      res = countThis(now3, now2);
    } else {
      now2 = (n-now3*3)/2;
      if (now2 == 0) {
        res = Math.pow(3,now3);
      } else {
        res = countThis(now3, now2);
      }
    }
  }
  for (let i = 0; i < now3; i++) {
    arr.push(3);
  }
  for (let i = 0; i < now2; i++) {
    arr.push(2);
  }
  return new Array(arr, res);
}
function checkUp(n, err) {
  if (!isFinite(n) || n < 0) {
    err = true;
  }
  return err;
}

function countThis(now3, now2) {
  return Math.pow(3,now3)*(now2*2);
}


console.log(maxValue(10));
console.log(maxValue(5));
console.log(maxValue(6));
console.log(maxValue(15));
console.log(maxValue(62));