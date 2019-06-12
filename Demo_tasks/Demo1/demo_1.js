// TOFIX if i'll hae time - width

function createField(height, width, symb) {
  let error = '',
      resultStr = "\n";

  error = checkInput(height, width, symb, error);
  if (Object.keys(error).length == 0) {
    // default values
    height = height || 4;
    width = width || 4;
    symb = symb.charAt(0) || '*';

    (height < 0) ? height *= -1 : height;
    (width < 0) ? width *= -1 : width;

    let str = new Array(width + 1).join(symb + " ");
    str = str.substring(0 ,str.length - 1);
    let i = 0;
    while (i < height) {
      if (i != 0 && i % 2 != 0) {
        resultStr += str+ " " + "\n";
      } else {
        resultStr += " " + str + "\n";
      }
      i++;
    }
  } else {
    resultStr = error;
  }
  return resultStr;
}
function checkInput(height, width, symb, error) {
  if(!isFinite(height)) {
    error = {status: 'failed', reason: 'height is not a number or is Infinity'};
  }
  if(!isFinite(width)) {
    error = {status: 'failed', reason: 'width is not a number or is Infinity'};
  }
  if(width == 0 || height == 0) {
    error = {status: 'failed', reason: 'width and height cannot be equal to zero'};
  }
  if(typeof symb !== 'string') {
    error = {status: 'failed', reason: 'symb is not a number or string'};
  }
  return error;
}
console.log(createField(6,10,'a'));
console.log(createField(10,'fdgdf','a'));
console.log(createField('fdgdf',10, 5));
console.log(createField(10, 5, undefined));
