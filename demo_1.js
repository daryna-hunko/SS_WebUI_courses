function field(height, width, symb) {
    // default values
    height = height || 4;
    width = width || 4;
    symb = symb || '*';

    let str = new Array(width + 1).join(symb + " ");
    let i = 0;
    let resultStr = "\n";
    while (i < height) {
      if (i != 0 && i % 2 != 0) {
        resultStr += str + "\n";
      } else {
        resultStr += " " + str + "\n";
      }
      i++;
    }
    return resultStr;
}
field(6,10,'a');
