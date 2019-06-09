function getPallindrom(str) {
      let rIndex = 0, 
          lIndex = 0,
          cIndex,
          currentPalindrome = "", 
          longestPalindrome = "";
        for (cIndex  = 0; cIndex < str.length - 1; cIndex++) {
            lIndex = cIndex - 1;  rIndex = cIndex + 1;
            while (lIndex >= 0 && rIndex < str.length) {
                if (str.charAt(lIndex) != str.charAt(rIndex)) {
                    break;
                }
                currentPalindrome = str.substring(lIndex, rIndex + 1);
                (currentPalindrome.length > longestPalindrome.length) ? longestPalindrome = currentPalindrome : longestPalindrome;
                lIndex--;  rIndex++;
            }
        }
        return longestPalindrome;

}
console.log(getPallindrom('12332145665444448'));
console.log(getPallindrom('12344554432145665444448'));