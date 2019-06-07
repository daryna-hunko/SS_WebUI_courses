function dateFormatter(date = 0, format = 'yyyy:MM:dd') {

  if (typeof(format) !== 'string') {
    return 'Wrong format!';
  }
  if (typeof(+date) !== 'number') {
    return 'Wrong date format!';
  }
  
  let result,
      formatArr = [], 
      resArr = [], 
      value,
      symb = ':',
      tempformat = format,
      tempDate = date;

  if (typeof date.getMonth !== 'function') {
    tempDate = new Date(+date);
  }
  value = formatLib(tempDate, tempformat, value);
  result = value;
  symb = getsymb(format);
  if (format.includes(symb)) {
    formatArr = format.split(symb);
  }
  if (formatArr.length != 0) {
    for (let i = 0; i < formatArr.length; i++) {
      value = formatLib(tempDate, formatArr[i], value);
      resArr.push(value);
    }
    result = resArr.join(symb);
  }
  
  return result;
}

function formatLib(tempDate, tempformat, value) {
  value = 0;
  switch (tempformat) {
    case 'yyyy': value = tempDate.getFullYear();
        break;
    case 'yy': value = tempDate.getFullYear().toString().slice(2);
        break;
    case 'MM': value = tempDate.getMonth(); 
              (value < 10) ? value = '0' + value : 0;
        break;
    case 'M': value = tempDate.getMonth();
        break;
    case 'dd': value = tempDate.getDay();
              (value < 10) ? value = '0' + value : 0;
        break;
    case 'd': value = tempDate.getDay();
        break;
    case 'HH': value = tempDate.getHours();
              (value < 10) ? value = '0' + value : 0;
        break;
    case 'H': value = tempDate.getHours();
        break;
    case 'mm': value = tempDate.getMinutes();
               (value < 10) ? value = '0' + value : 0;
        break;
    case 'm': value = tempDate.getMinutes();
        break;
    case 'ss': value = tempDate.getSeconds();
               (value < 10) ? value = '0' + value : 0;
        break;
    case 's': value = tempDate.getSeconds();
        break;
  }
  return value;
}

function getsymb(format, symb) {
  if (format.includes(':')) {
    symb = ':';
  }
  if (format.includes('/')) {
    symb = '/';
  }
  if (format.includes('@')) {
    symb = '@';
  }
  if (format.includes('=')) {
    symb = '=';
  }
  return symb;
}

console.log(dateFormatter(3600000000000, 'yyyy/MM/dd'));