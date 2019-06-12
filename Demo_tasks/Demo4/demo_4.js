//http://stevekrenzel.com/articles/longest-palnidrome

function findTheLongest(str){ 
  let longestPalindromeLength = 0,
      longestPalindrome = '',
      strMinusOneFromBeginning,
      strMinusOneFromEnding;
      str = str.toString();
  for(let i = 0; i < str.length; i++){ 
    strMinusOneFromBeginning = str.substr(i, str.length);
    for(let j = strMinusOneFromBeginning.length; j > 0; j--){ 
      strMinusOneFromEnding = strMinusOneFromBeginning.substr(0, j); 
      if(strMinusOneFromEnding <= 0)
      continue 
      if(isThisAPalidrome(strMinusOneFromEnding)){ 
        if(strMinusOneFromEnding.length > longestPalindromeLength){ 
          longestPalindromeLength = strMinusOneFromEnding.length;
          longestPalindrome = strMinusOneFromEnding; 
        } 
      } 
    } 
  } 
  return longestPalindrome; 
}

function isThisAPalidrome(str){
  let reverse = str.split('').reverse().join('');
  return str == reverse;
}

console.log(findTheLongest('12332145665444448'));
console.log(findTheLongest(12344554432145665444448));
console.log(findTheLongest('sadhdshahahahahahah'));