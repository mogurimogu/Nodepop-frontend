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
            console.log(productos)
            if(productos.length === 0){
                PubSub.publish(PubSub.events.SHOW_ERROR, 'No existe ningún anuncio')
            }
            for (const producto of productos) {
                const productElement = document.createElement('article')
                productElement.classList.add('col')
                productElement.innerHTML = productView(producto)
                this.element.appendChild(productElement)
            }
        } catch (error) {
            PubSub.publish(PubSub.events.SHOW_ERROR, error)
        }finally{
            PubSub.publish(PubSub.events.HIDE_LOADING)
        }
    }

}