var teamA = [1,2,3,4,5,6,7,8,9,10,11];
var teamB = [1,2,3,4,5,6,7,8,9,10,11];

function doMagic(input) {
  // checking for the empty input
  if (input.length === 0) {
    return ([teamA.length,teamB.length]);
  }

  let yellowPlayesArr = [];
  var inputArr = input.split(', ');

  for (let i = 0; i < inputArr.length; i++) {
    if (teamA.length >= 7 && teamB.length >= 7) {
      let charLastSymb = inputArr[i].charAt((inputArr[i].length - 1));
      // extracts the number of the player
      let num = +parseInt(inputArr[i].match(/\d+/)); 
      // if the card is RED
      if (charLastSymb == 'R') {
        // checking for the match to delete the player from the team array
        if (inputArr[i].charAt(0) === 'A') {
          let index = teamA.indexOf(num);
          if (index >= 0) {
            teamA.splice(index, 1);
          }
        } else {
          let index = teamB.indexOf(num);
          if (index >= 0) {
            teamB.splice(index, 1);
          }
        }
      }
      // if the card is YELLOW
      if (charLastSymb == 'Y') {
        yellowPlayesArr.push(inputArr[i]);
        for (let a = 0; a < yellowPlayesArr.length; a++) {
          if (yellowPlayesArr[a] == inputArr[i]) {
            if (inputArr[i].charAt(0) === 'A') {
              let index = teamA.indexOf(num);
              if (index >= 0) {
                teamA.splice(index, 1);
              }
            } else {
              let index = teamB.indexOf(num);
              if (index >= 0) {
                teamB.splice(index, 1);
              }
            }
          }
        }
      }
    }
  }

  return ([teamA.length,teamB.length]);
}
console.log(doMagic('B1R, B2R, B11R, B3R, A3Y, A3Y, A4Y, A3Y, A4Y, A5R, A8R, B9R, B8R, B9R'));