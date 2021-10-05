import DataService from "../services/DataService.js"
import { productView } from "../views.js";

export default class ProductoController{

    constructor (element){
        this.element = element
        this.loadProducts()
    }

    async loadProducts() {
        try {
            const productos = await DataService.getProducts()
            for (const producto of productos) {
                const productElement = document.createElement('article')
                productElement.innerHTML = productView(producto)
                this.element.appendChild(productElement)
            }
        } catch (error) {
            console.log(error)
        }
    }

}