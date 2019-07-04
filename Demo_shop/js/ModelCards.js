import Card from "./ViewCards.js";

export default class Builder {
  loadJSON(contr) {
    if (localStorage.getItem("productsArr") == null) {
      const url = "data/data.json";
      fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        // Work with JSON data here - pull this to localStorage
        //window.productsStorage = data;
        localStorage.setItem("productsArr", JSON.stringify(data));
        contr.showView(data);
      })
    } else {
      let data = JSON.parse(localStorage.getItem("productsArr"));
      contr.showView(data);
    }
    /*
    var returnObj = JSON.parse(localStorage.getItem("productsArr"));
    console.log(returnObj)*/
  }
  loadTranslations() {
    if (localStorage.getItem("translations") == null) {
      const url = "data/translations.json";
    
      fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        // Work with JSON data here 
        localStorage.setItem("translations", JSON.stringify(data));
      })
    }
  }


  products(data) {
    const result = [];

    data.forEach(element => {
      switch (element.type) {
        case 'cat':
          result.push(new Cat(element));
          break;
        case 'dog':
          result.push(new Dog(element));
          break;
        case 'fish':
          result.push(new Fish(element));
          break;
        case 'bird':
          result.push(new Bird(element));
          break;
      }
    });

    return result;
  }

  convertToLang(a){
    let result = a;
    let translations = JSON.parse(localStorage.getItem("translations"));
    for (let pos in translations[0]) {
      if (a == pos) {
        (isNaN(1 * a)) ? result = translations[0][a][0][window.lang] : result = a;
      }
      if (a == true) {
        result = translations[0]['true'][0][window.lang];
      }
      if (a == false) {
        result = translations[0]['false'][0][window.lang];
      }
    }
    return result;
  }

  // this should be called in controller?
  /*changLang() {
    let activeLang = document.querySelector('.lang-menu .active');
    window.lang = activeLang.outerText;
    if (
      document.querySelector('.checkbox-cat').checked ||
      document.querySelector('.checkbox-dog').checked ||
      document.querySelector('.checkbox-bird').checked ||
      document.querySelector('.checkbox-fish').checked
    ) {
      this.filterContent();
    } else {
      this.build(window.productsStorage);
    }
  }*/

  filterContent(contr) {
    let filteredArray = [],
        temparr = JSON.parse(localStorage.getItem("productsArr")),
        checkBoxCat = document.querySelector('.checkbox-cat'),
        checkBoxDog = document.querySelector('.checkbox-dog'),
        checkBoxBird = document.querySelector('.checkbox-bird'),
        checkBoxFish = document.querySelector('.checkbox-fish'),
        checkBoxAll = document.querySelector('.checkbox-all');
        
    if (checkBoxCat.checked == true) {
      filteredArray = temparr.filter(el => el.type == 'cat');
      contr.showView(filteredArray);
    } else if (checkBoxDog.checked == true) {
      filteredArray = temparr.filter(el => el.type == 'dog');
      contr.showView(filteredArray);
    } else if (checkBoxBird.checked == true) {
      filteredArray = temparr.filter(el => el.type == 'bird');
      contr.showView(filteredArray);
    } else if (checkBoxFish.checked == true) {
      filteredArray = temparr.filter(el => el.type == 'fish');
      contr.showView(filteredArray);
    } else if (checkBoxAll.checked == true) {
      contr.showView(this.products(temparr));
    }
  }

  
}



/*
let search = document.querySelector('.search');
document.querySelector('.search').addEventListener("click", function(e){
  let result = document.querySelector('.result');
  result.addEventListener("hover", function(e){
    let name = document.querySelector('.title');
    result.setAttribute('href','javascript.void();');
    name = name.outerTex;
  });
  //Builder.filterContent(name);
});*/



// view lang controls
/*let langControls = document.querySelector('.lang-menu');
langControls.addEventListener("click", function(e){
  let elem = e.target;
  Card.cleanCheckedDay();
  if(elem.classList.contains("item")) elem.classList.toggle("active");
  Builder.changLang();
});*/



// Component
// all animal classes
class Animal {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.type = data.type;
    this.gender = data.gender;
    this.quantity = data.quantity;
    this.prod_url = data.prod_url;
    this.price = data.price;
    this.age = data.age;
    this.weight = data.weight;
    this.life_length = data.life_length;
    this.color = data.color;
    this.rapacity = data.rapacity;
  }
}
class Dog extends Animal {
  constructor(data) {
    super(data);
    this.fur = data.fur;
    this.short_tail = data.short_tail;
    this.short_legs = data.short_legs;
    this.pedigree = data.pedigree;
    this.speciality = data.speciality;
  }
}
class Cat extends Animal {
  constructor(data) {
    super(data);
    this.fur = data.fur;
    this.short_tail = data.short_tail;
    this.short_legs = data.short_legs;
    this.pedigree = data.pedigree;
    this.straight_ears = data.straight_ears;
  }
}
class Bird extends Animal {
  constructor(data) {
    super(data);
    this.can_fly = data.can_fly;
    this.can_speak = data.can_speak;
    this.can_sing = data.can_sing;
  }
}
class Fish extends Animal {
  constructor(data) {
    super(data);
    this.need_solted_water = data.need_solted_water;
    this.area = data.area;
  }
}

