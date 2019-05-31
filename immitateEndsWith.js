function immitateEndsWith(str, substr, position = 0) {
    substr = substr.split("").reverse().join("");
    str = str.split("").reverse().join("");
    position = str.length - position;
    if ((str.includes(substr)) && (str.charAt[position] === substr.charAt[position])) {
        return true;
    }
    return false;
}

console.log(immitateEndsWith("hello guys", "uys"));
console.log(immitateEndsWith("hello guys", "uhys"));
console.log(immitateEndsWith("hello guys", "ll", 2));
console.log(immitateEndsWith("hello guys", "ello"));
