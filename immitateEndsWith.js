function immitateEndsWith(str, substr) {
    substr = substr.split("").reverse().join("");
    console.log(substr);
    str = str.split("").reverse().join("");
    console.log(str);
    if ((str.includes(substr)) && (str.charAt[0] === substr.charAt[0])) {
        return true;
    }
    return false;
}

console.log(immitateEndsWith("hello guys", "uys"));
console.log(immitateEndsWith("hello guys", "uhys"));
console.log(immitateEndsWith("hello guys", "affdfgfhdggjgjgh"));
