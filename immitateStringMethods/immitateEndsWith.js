function immitateEndsWith(str, substr, position = 0) {
    substr = substr.split("").reverse().join("");
    str = str.split("").reverse().join("");
    if ((str.includes(substr))) {
        substr = substr.split("").reverse().join("");
        str = str.split("").reverse().join("");
        if (str.charAt(position) === substr.charAt(0)) {
            return true;
        }
    }
    return false;
}

console.log(immitateEndsWith("hello guys", "uys"));
console.log(immitateEndsWith("hello guys", "uhys"));
console.log(immitateEndsWith("hello guys", "ll", 2));
console.log(immitateEndsWith("hello guys", "ll", 1));
console.log(immitateEndsWith("hellfdfdfdfdo guys", "dfdfdf", 5));
