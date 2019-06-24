function fromJSON(){
  let aja = new XMLHttpRequest();
  const url = "data/data.json";

  aja.addEventListener('readystatechange', function(){
      // readystate 0.1.2.3.4
      // console.log("readyState: " + this.readyState + "\nstatus: " + this.status);
      if(this.readyState == 4 && this.status == 200){
          buildCards(JSON.parse(this.responseText));
      }
  });

  aja.open('GET', url);

  aja.send();
}

function buildCards(cards){
  window.products = [];

  cards.forEach((el)=>{
      // buildCard(el);
      window.products.push(new Card(el));
  });
}

function deleteCards(){
  const rowCards = document.querySelector('.products-container');
  while(rowCards.hasChildNodes()){
      rowCards.removeChild(rowCards.firstChild);
  }
}
/*
function renderCards(){
  deleteCards();
  window.products.forEach((el)=>{
      // buildCard(el);
      buildCard(el);
  });
}*/

function buildCard(el){
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

function Card(el){
  this.name = el.name;
  this.quantity = el.quantity;
  this.url = el.url;
  buildCard(el);
  /*this.addPoint = function(){
      this.count++;
      //тупой рендер
      renderCards(this);
  }
  this.removePoint = function(){
      this.count--;
  }*/
}

fromJSON();