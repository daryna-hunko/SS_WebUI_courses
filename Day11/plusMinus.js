function plusMinus (array, sum) {
  let err,
      result;
  const arr = array;

      
    result = calcu(1, sum, ...arr);
    
  return result;
}

function checkUp(arr, sum, err) {
  if (arr.length <= 2 || arr.length >= 22) {
    err = true;
  }
  for (let i = 0; i < arr.length; i++) {
    if (0 >= arr[i] || arr[i] >= 20) {
      err = true;
    }
  }
  if (-10 >= sum || sum >= 10) {
    err = true;
  }
  return err;
}

function arrSum(arr){
  return arr.reduce((acc, el)=> acc + el);
}

function calcu(index, sum, ...arr){
  let arrMinus = [...arr],
      sumPlus = arrSum(arr),
      sumMinus = 0;
  
  arrMinus[index] *= -1; 
  sumMinus = arrSum(arrMinus);
  
  if(sumPlus == sum || sumMinus == sum){
    return true;
  }
  
  return (++index == arr.length) ? false : calcu(index, ...arr) || calcu(index, ...arrMinus);
   
}
//TO FIX false
console.log(plusMinus([3, 1, 4, 6, 8, 8, 8, 8], 11));
//TO FIX Uncaught TypeError: Reduce of empty array with no initial value
console.log(plusMinus([2, 5, 6, 11, 3], -2));
console.log(plusMinus([1, 5, 3, 2, 5], -2));
console.log(plusMinus([1, 3, 4, 6, 8], -2));
