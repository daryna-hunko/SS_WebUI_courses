import Builder from "./ModelCards.js";
import Card from "./ViewCards.js";

export default class ControllerCards
{
    constructor(){
        this.model = new Builder();
        this.view = new Card();
        this.init();
    }

    init(){
      this.model.loadTranslations(this);
      this.model.loadJSON(this);
      this.view.initListeners(this);
    }

    showView(data){
      let dataModified = this.model.products(data);
      this.view.render(data, this);
    }

    transtate(word) {
      return this.model.convertToLang(word);
    }
    filter() {
      this.model.filterContent(this);
    }

}