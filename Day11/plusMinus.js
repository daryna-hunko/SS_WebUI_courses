function plusMinus (arr, sum) {
  checkUp(arr, sum);

  let resultArr = [], // for the sum of arrays
      arraysSet = [[1, 3, 4, 6, 8],[-1, 3, 4, 6, 8],[1, -3, 4, 6, 8],[1, 3, -4, 6, 8]], // all possible variants of array
      sumI = Number();

  
  for (let i = 0; i < arraysSet.length; i++) {
      sumI += arraysSet[i];
      resultArr.push(sumI);
      console.log(sumI);
  }
  console.log(resultArr);
  for (let i = 0; i < resultArr.length; i++) {
    if (resultArr[i] == sum) {
      return true;
    }
  }
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

console.log(plusMinus([1, 3, 4, 6, 8], 20));