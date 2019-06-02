function immitateSubstr(string, start, length = string.length) {
    let newSting = "";
    for (let i = start; i < (start + length); i++) {
        newSting += string.charAt(i);
    }
    string = newSting;
    return string;
}
immitateSubstr('123456789', 4, 12)
