function checkeSqueres(obj) {
    let result = [],
        keysArr = [];

    for (let key of obj) {
      let keysI = Object.keys(key);
      keysArr.push(keysI);
       for (let el in key) {
            let p = (el[keysArr[1]] + el[keysArr[2]] + el[keysArr[3]])*0.5;
            obj[i].squere = Math.sqrt(p * (p - el[keysArr[i+1]]) * (p - el[keysArr[i+2]]) * (p - el[keysArr[i+3]]));
            console.log(key);
        }
    }
    console.log(keysArr);

    /*for (let i = 0, i < obj.length, i++) {
        for (let key in obj[i]) {
            let p = (key[keysArr[i+1]] + key[keysArr[i+2]] + key[keysArr[i+3]])*0.5;
            obj[i].squere = Math.sqrt(p * (p - key[keysArr[i+1]]) * (p - key[keysArr[i+2]]) * (p - key[keysArr[i+3]]));
        }
        console.log(obj[i]);
        //var p = (prop[1] + prop[2] + prop[3])*0.5; //Вычисление полупериметра
        //obj.squere = Math.sqrt(p * (p - prop[1]) * (p - prop[2]) * (p - prop[3]));//Вычисление площади
    }*/
    
    /* 
    obj = obj.sort(compare);
    for (let i = 0, i < obj.length, i++) {
        result.push(obj[i].name);
    }*/
    return result;
}
function compare( a, b ) {
  if ( a.name < b.name ){
    return -1;
  }
  if ( a.name > b.name ){
    return 1;
  }
  return 0;
}

checkeSqueres(
    [
    {name: 'ABC', a: 5, b: 5, c: 5},
    {name: 'CDA', c: 1, d: 5, a: 4},
    {name: 'FES', f: 5, e: 5, s: 5}
    ]
);
