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
        Builder.loadJSON(this);
        Builder.loadTranslations(this);
    }

    showView(data){
       Card.render(data, this);
    }

}