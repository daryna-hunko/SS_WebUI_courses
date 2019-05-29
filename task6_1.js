// return functionality
function returnSomethins(returnValue) {
    if (returnValue == -1) {
        return 'Game is not finished yet or there are empty spots';
    } else if (returnValue == 1) {
        return 'X won';
    } else if (returnValue == 2) {
        return 'O won';
    } else if (returnValue == 0) {
        return 'Cat\'s game';
    } else {
        return 'failed';
    }
}
// input checkup
function checkInput(input) {
    // input[i].length checkup
    let isNotANumber, 
        isNotTrue = 0;
    
    for (let i = 0; i < input.length; i++) {
        isNotTrue += Number(input[i].length !== 3);
        isNotANumber += Number(isFinite(input[i]) !== 1);
    }

    return (Array.isArray(input) && input.length === 3) == 1 && (isNotTrue && isNotANumber) == 0;
}


function letsPlay(input) {
  const NOTHING = 0,
        XVALUE = 1,
        OVALUE = 2;
  let returnValue = 0,
      isValid = false;

  isValid = checkInput(input);
  if (isValid) {
    if (input[0] === [1,1,1] 
        || input[1] === [1,1,1] 
        || input[3] === [1,1,1]) {
      returnValue = XVALUE;
    }
    if (input[0] === [2,2,2] 
             || input[1] === [2,2,2] 
             || input[3] === [2,2,2]) {
      returnValue = OVALUE;
    }
    if ((input[0][0] && input[1][0] && input[2][0]) 
        || (input[0][1] && input[1][1] && input[2][1]) 
        || (input[0][2] && input[1][2] && input[2][2]) === 1) {
      returnValue = XVALUE;
    }
    if ((input[0][0] && input[1][0] && input[2][0]) 
        || (input[0][1] && input[1][1] && input[2][1]) 
        || (input[0][2] && input[1][2] && input[2][2]) === 2) {
      returnValue = OVALUE;
    }
    if ((input[0][0] && input[1][1] && input[2][2])
        || (input[2][0] && input[1][1] && input[0][2]) === 1) {
      returnValue = XVALUE;
    }
    if ((input[0][0] && input[1][1] && input[2][2])
        || (input[2][0] && input[1][1] && input[0][2]) === 2) {
      returnValue = OVALUE;
    }
  }

  if (returnValue == -1) {
        return 'Game is not finished yet or there are empty spots';
    } else if (returnValue == 1) {
        return 'X won';
    } else if (returnValue == 2) {
        return 'O won';
    } else if (returnValue == 0) {
        return 'Cat\'s game';
    } else {
        return 'failed';
    }
}
