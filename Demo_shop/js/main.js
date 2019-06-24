function init() {
  getData();
}

function getData() {
  const url = "data/data.json";

  fetch(url)
  .then(response => {
    return response.json();
  })
  .then(data => {
    // Work with JSON data here - pull this to localStorage
    //localStorage.setItem("productsArr", JSON.stringify(data));
    Builder.build(data);
  })
  /*
  var returnObj = JSON.parse(localStorage.getItem("productsArr"));
  console.log(returnObj)*/
}

class Builder {
  constructor(data) {}
  static products (data) {
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

  build(data) {
    Card.render(data);
  }
  
}


class Card {
  constructor(data) {
    this.data = data;
  }

  static create(el) {
    const rowCards = document.querySelector('.products-container');
    let parentDiv = document.createElement('div');

    el.link = parentDiv;

    parentDiv.classList.add('ui', 'card');
    parentDiv.innerHTML = `<div class="image">
            <img src="${el.url}">
          </div>
          <div class="content">
            <a class="header">${el.name}</a>
            <div class="available">Available at the moment: ${el.quantity}</div>
            <div class="ui buttons">
              <button class="ui disabled negative button"><i class="minus icon"></i></button>
              <div class="or"></div>
              <button class="ui positive button"><i class="plus icon"></i></button>
            </div>
          </div>`;
    rowCards.appendChild(parentDiv);
  }

  static delete() {
    const rowCards = document.querySelector('.products-container');
    while(rowCards.hasChildNodes()){
        rowCards.removeChild(rowCards.firstChild);
    }
  }

  render(data) {
    window.products = [];
    this.delete();
    data.forEach((el)=>{
      // build Card
      window.products.push(this.create(el));
    });
  }
}




// all animal classes
class Animal {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.type = data.type;
    this.male = data.male;
    this.quantity = data.quantity;
    this.url = data.url;
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



init();