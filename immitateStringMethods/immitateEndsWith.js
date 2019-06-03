function immitateEndsWith(str, substr, position = 0) {
    if (position !== 0) {str.length = position;}
    substr = substr.split("").reverse().join("");
    str = str.split("").reverse().join("");
    if ((str.includes(substr)) 
        && (str.charAt(0) == substr.charAt(0))) {
            return true;
    }
    return false;
}

console.log(immitateEndsWith("hello guys", "uys"));
console.log(immitateEndsWith("hello guys", "uhys"));
console.log(immitateEndsWith("hello guys", "ll", 4));
console.log(immitateEndsWith("hello guys", "ll", 1));
console.log(immitateEndsWith("hellfdfdfdfdo guys", "dfdfdf", 15));
