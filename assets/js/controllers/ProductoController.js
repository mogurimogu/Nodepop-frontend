import PubSub from "../services/PubSub.js";
import DataService from "../services/DataService.js"
import { productView } from "../views.js";

export default class ProductoController{

    constructor (element){
        this.element = element
        this.loadProducts()
    }

    async loadProducts() {
        PubSub.publish(PubSub.events.SHOW_LOADING)
        try {
            const productos = await DataService.getProducts()
            for (const producto of productos) {
                this.element.innerHTML = productView(producto)
            }
        } catch (error) {
            PubSub.publish(PubSub.events.SHOW_ERROR, error)
        }finally{
            PubSub.publish(PubSub.events.HIDE_LOADING)
        }
    }

}