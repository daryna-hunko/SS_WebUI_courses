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
      this.model.loadJSON(this);
      this.model.loadTranslations(this);

      //move to view
      document.querySelector('.filter').addEventListener("click", e=>
      this.model.filterContent());
      /*document.querySelector('.result').addEventListener("click", function(e){
          let name = document.querySelector('.title');
          name = name.outerTex;
          this.model.filterContent();
        //Builder.filterContent(name);
      });*/
    }

    showView(data){
       Card.render(data, this);
    }

}