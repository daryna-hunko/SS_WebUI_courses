class NumC{
    //статический метод класса
    //возвращает десятичное число (число с плавающей точкой)
    static toData(num){
        let nums = num.toString(); // возвращает строку
  
        nums = nums.replace(/\s*/g, "");//заменяет пробелы на ничего
        nums = nums.replace(/[\s\.]/g, "");//заменяет пробелы на ничего
        nums = nums.replace(/(&nbsp;)/g, "");//заменяет пробелы на ничего
        nums = nums.replace(",", ".");//заменяет запятые на точки
  
        return parseFloat(nums);
    } /*Функция parseFloat() принимает строку в качестве аргумента и возвращает десятичное число (число с плавающей точкой)*/
    //в тесте проверить на число, на десятичное число (число с плавающей точкой), пробелы кот есть в полифиле риплейса
  
    //проверка на число и вывод 
    static toBuh(num, decimals, curr){
        if(NumC.isNumeric(num)){
            return NumC.convertToBuh(num, decimals, curr);
            //если число, то верни строку с "число + валюта" 
        }else{
            //если не число, то инпут как есть
            return num;
        }
    }
    //тест на типы данных входа-выхода
  
  //локализизарует вход под локаль и возвращает число + валюту
    static convertToBuh(num, decimals, curr){
        let nums = String(num),
            counter = nums.length - (decimals + 1);
  
        decimals = decimals || 3;
        
  
        if(nums.indexOf(",") == -1 /*если запятых нет*/|| counter < nums.indexOf(",")/**/){
  
            nums = num.toLocaleString('de-DE', { minimumFractionDigits: decimals });
  //Метод toLocaleString() возвращает строку с языко-зависимым представлением числа.
            if(curr){
                nums += " " + curr;
            }
            
            return nums;
  
        } else if(counter > nums.indexOf(",")){
  
            nums = num.toLocaleString('de-DE', { maximumFractionDigits: decimals });
  
            if(curr){
                nums += " " + curr;
            }
  
            return nums;
        }
        //возращает nums = число + валюта
        // тесты строка ли на выходе
    }
  // проверка на число
    static isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
      }
      //в тестах проверить на булевое значение
  
      //принимает название и возвращает символьное обозначение валюты
    static toSymbol(curr) {
        switch(curr){
            case "UAH" : {
                return "₴";
            }
            case "EUR" : {
                return "€";
            }
            case "USD" : {
                return "$";
            }
        }
        return curr;
    }
    //тест строка ли и ожидаемое значение
  
    //принимает символьное обозначение валюты и название
    static toCurrency(symb) {
        switch(symb){
            case "₴" : {
                return "UAH";
            }
            case "€" : {
                return "EUR";
            }
            case "$" : {
                return "USD";
            }
        }
        return symb;
    }
  //тест строка ли и ожидаемое значение
  
  // по классу элемнта в ДОМе (summClassName) получает что-то преоброзовывает методом toData в число десятичное и добавляет в totalSumm
    static calcSummFromRows(trs,summClassName){
        let totalSumm = 0;
    
        for(let i = 0; i < trs.length; i++){
            totalSumm += NumC.toData(trs[i].querySelector(summClassName).innerHTML);
            
        }
    
        return totalSumm;
    }
  //тест число ли
  
  //получает даты первого и последнего элемента массива в заданном формате и возвращает объект
    static getFALDates(trs, dateClassName){
        let dates = {},
            dtemp,
            y,
            m,
            d;
  
        dtemp = new Date(trs[0].querySelector(dateClassName).innerHTML);
        y = dtemp.getFullYear();
        m = dtemp.getMonth() + 1;
        d = dtemp.getDate();
  
        if(m < 10){
            m = "0" + m;
        }
        if(d < 10){
            d = "0" + d;
        }
  
        dates["last"] = y + "-" + m + "-" + d;
  
  
        dtemp = new Date(trs[trs.length-1].querySelector(dateClassName).innerHTML);
        y = dtemp.getFullYear();
        m = dtemp.getMonth() + 1;
        d = dtemp.getDate();
  
        if(m < 10){
            m = "0" + m;
        }
        if(d < 10){
            d = "0" + d;
        }
  
        dates["first"] = y + "-" + m + "-" + d;
  
        return dates;
    }
  }
  //тест dates.values = строка и на соотвествие шаблону(?)