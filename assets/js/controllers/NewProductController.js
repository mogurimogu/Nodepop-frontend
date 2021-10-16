import DataService from "../services/DataService.js"
import PubSub from "../services/PubSub.js"

export default class NewProductController {

    constructor(element) {
        this.element = element
        this.attachEventListeners()
    }

    attachEventListeners() {
        this.element.addEventListener('submit', async event => {
            event.preventDefault()

            if (this.element.checkValidity()) {
                const data = new FormData(this.element)
                const productData = {}
                productData.title = data.get('title')
                productData.photo = data.get('photo')
                productData.price = data.get('price')
                productData.tags = data.get('tags').split(','||', ')
                productData.description = data.get('description')
                
                try {
                    const result = await DataService.createProduct(productData)
                    PubSub.publish(PubSub.events.SHOW_SUCCESS, 'Producto creado!')
                    setTimeout(() => {
                        location.href = "./index.html"
                    }, 1000);
                } catch (error) {
                    PubSub.publish(PubSub.events.SHOW_ERROR, error)
                }
            }
        })
    }

}