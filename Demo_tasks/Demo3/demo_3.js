function checkeSqueres(obj) {
    let result = [],
        keysArr = [];

    for (let key of obj) {
      let keysI = Object.keys(key);
      keysArr.push(keysI);
    }
 
    for (let i = 0; i < obj.length; i++) {
            let n1 = keysArr[i][1],
                n2 = keysArr[i][2],
                n3 = keysArr[i][3];
            console.log(obj[i].n1);
            let p = (obj[i].n1 + obj[i].keysArr[i][2] + obj[i].keysArr[i][31])*0.5;
            obj[i].square = Math.sqrt(p * (p - obj[i].n1) * (p - obj[i].n2) * (p - obj[i].n3));
        //console.log(obj[i]);
    }
    
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
    {name: 'ABC', 'a': 5, 'b': 5, 'c': 5},
    {name: 'CDA', 'c': 1, 'd': 5, 'a': 4},
    {name: 'FES', 'f': 5, 'e': 5, 's': 5}
    ]
);
