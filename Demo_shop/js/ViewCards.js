export default class View {
  initListeners(contr) {
    document.querySelector('.filter').addEventListener("click", e=>{
      document.querySelector('.prompt').value = null;
      contr.filter()
    });
    document.querySelector('.lang-menu').addEventListener("click", e=>{
      document.querySelector('.prompt').value = null;
      contr.transtateCards(e)
    });
    document.querySelector('.search').addEventListener("keydown", e=>{
      if(event.key==="Enter"){
        contr.searchCards();
      }
    });
  }
  create(el, contr) {
    const rowCards = document.querySelector('.products-container');
    let parentDiv = document.createElement('div'),
        uniqueCartClass = 'card-' + el.id,
        description = '',
        content = '';
    el.link = parentDiv;

    description = '<div class=\"descr\">';
    for(let part in el){
      if (part !== 'title' && part !== 'prod_url' && part !== 'id' && part !== 'type' && part !== 'quantity' && part !== 'link') {
        content += '<p>' + contr.transtate(part) + ": " + contr.transtate(el[part]) + '</p>';
      }
    }
    description += content + '</div>';

    el.link = parentDiv;

    parentDiv.classList.add('ui', 'card', uniqueCartClass);
    parentDiv.innerHTML = `<div class="image">
            <img src="${el.prod_url}">
          </div>
          <div class="content">
            <a class="header">${el.title}</a>
            <!-- <div class="available">Available at the moment: ${el.quantity}</div> -->
            </br>
            ${description}
            <div class="ui buttons">
              <button class="ui negative button"><i class="minus icon"></i></button>
              <div class="or"></div>
              <button class="ui positive button"><i class="plus icon"></i></button>
            </div>
          </div>`;

    parentDiv.querySelector('.button.negative').addEventListener('click', contr.removePoints.bind(contr, el));
    parentDiv.querySelector('.button.positive').addEventListener('click', contr.addPoints.bind(contr, el));

    rowCards.appendChild(parentDiv);
  }

  delete() {
    const rowCards = document.querySelector('.products-container');
    while(rowCards.hasChildNodes()){
        rowCards.removeChild(rowCards.firstChild);
    }
  }

  render(data, contr) {
    this.delete();
    data.forEach((el)=>{
      this.create(el, contr);
    });
  }

  reCheckActiveLang(e) {
    let chEll = document.getElementsByClassName('active');
    if (chEll.length !== 0) {
      for (let i = 0; i < chEll.length; i++) {
        chEll[i].classList.remove("active");
        break;
      }
    }
    let elem = e.target;
    if(elem.classList.contains("item")) elem.classList.toggle("active");
  }

  resetFilters() {
    let checkBoxCat = document.querySelector('.checkbox-cat'),
    checkBoxDog = document.querySelector('.checkbox-dog'),
    checkBoxBird = document.querySelector('.checkbox-bird'),
    checkBoxFish = document.querySelector('.checkbox-fish'),
    checkBoxAll = document.querySelector('.checkbox-all');

    checkBoxCat.checked = false;
    checkBoxDog.checked = false;
    checkBoxBird.checked = false;
    checkBoxFish.checked = false;
    checkBoxAll.checked = true;
  }
}

