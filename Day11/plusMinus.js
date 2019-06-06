function plusMinus (arr, sum) {
  checkUp(arr, sum);

  let resultArr = [], // for the sum of arrays
      arraysSet = [], // all possible variants of array
      sumI;

    sumI = 0;
    for (let i = 0; i < arr.length; i++) {
        sumI += +arr[i];
    }
    if (sumI == sum) {
        return true;
    }
    
    recSum (arr, sum);
    
    
    
    
  /*for (let i = 0; i < resultArr.length; i++) {
    if (resultArr[i] == sum) {
      return true;
    }
  }*/
  return false;
}

function checkUp(arr, sum) {
  if (arr.length <= 2 || arr.length >= 22) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    if (0 >= arr[i] || arr[i] >= 20) {
      return false;
    }
  }
  if (-10 >= sum || sum >= 10) {
    return false;
  }
}

function recSum(arr, sum) {
    let sumarr = 0,
    count = 0;
    
    arr[count] *= -1;
    for (let i = 0; i < arr.length; i++) {
        sumarr += +arr[i];
    }
    count++;
    if (sumarr == sum) {
      return true;
    } else (
        recSum(arr,sum)
    )
    return false;
}

console.log(plusMinus([1, 3, 4, 4], 11));
