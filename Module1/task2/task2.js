function sortString(str) {
  if (str == "") {
    return "";
  } 
  let wordsArray = str.split(' ');
  let numberArray = wordsArray.map(function(name) {
    return +parseInt(name.match(/\d+/));
  });
  // check for wrong numbers
  let positiveArr = [];
  positiveArr = numberArray.filter(function(number) {
    return number === 0 || number > 9;
  });
  if (positiveArr.length !== 0) {
    return("wrong number in the word");
  } 
  let finalSortedString = [];
  for (let i = 0; i < wordsArray.length; i++) {
    finalSortedString[i] = wordsArray[(numberArray.indexOf(i + 1))];
  }
  return(finalSortedString.join(' '));
}
console.log(sortString("is2 Thi1s T4est 3a"));
console.log(sortString("4of Fo1r pe6ople g3ood th5e the2"));
console.log(sortString(""));
console.log(sortString("4of Fo1r pe6ople g3ood th53e the2"));
