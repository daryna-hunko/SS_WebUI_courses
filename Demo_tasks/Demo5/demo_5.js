function luckyTickets(obj) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let min = obj.min,
      max = obj.max,
      error = {},
      methodMCounter,
      methodPCounter;
      error = checkInput(obj, error);
      
      

  return (Object.keys(error).length !== 0) ? error : 0;
}

function countMethodM(min, max, methodMCounter/*, reducer*/) {
const reducer = (acc, curr) => acc + curr;
  methodMCounter = 0;
  let arrLeft = [],
      arrRight = [],
      arrI = [],
      sumLeft,
      sumRight,
      minValue = min.toFixed();
  for (let i = min; i < max; i++) {
    arrI = minValue.split('');
    console.log(arrI);
    arrLeft.push(minValue[0], minValue[1], minValue[2]);
    arrRight.push(minValue[3], minValue[4], minValue[5]);
    console.log(arrLeft, arrRight);

    sumLeft = arrLeft.reduce(reducer);
    sumRight = arrRight.reduce(reducer);
    console.log(sumLeft, sumRight);
    if (sumLeft === sumRight) {
      methodMCounter++;
    }
    minValue++;
  }

  return methodMCounter;
}
countMethodM('111111', '111123', 0);

function checkInput(obj, error) {
  if(typeof(obj) !== 'object') {
    error = {status: 'failed', reason: 'wrong paramerers - not an object'};
  }
  if(obj.min === undefined || obj.max === undefined) {
    error = {status: 'failed', reason: 'wrong paramerers - not all paramerers are present'};
    return error;
  }
  if(!isFinite(obj.min) || !isFinite(obj.max)) {
    error = {status: 'failed', reason: 'wrong paramerers - not a number'};
  }
  if(obj.min.length !== 6 || obj.max.length !== 6) {
    error = {status: 'failed', reason: 'wrong paramerers - paramerers have to be 6 number long'};
  }
  return error;
}

console.log(luckyTickets({max: '111111'}));