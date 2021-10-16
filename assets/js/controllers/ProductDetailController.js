import DataService from "../services/DataService.js"
import PubSub from "../services/PubSub.js"
import { productDetailView } from "../views.js"

export default class ProductDetailController {

    constructor(element, productID) {
        this.element = element
        this.loadProduct(productID)
    }

    async loadProduct(productID) {
        PubSub.publish(PubSub.events.SHOW_LOADING)
        try {
            const product = await DataService.getProductsDetail(productID)
            this.element.innerHTML = productDetailView(product)
            this.addDeleteButtonEventListener(product)
        } catch (error) {
            PubSub.publish(PubSub.events.SHOW_ERROR, error)
        } finally {
            PubSub.publish(PubSub.events.HIDE_LOADING)
        }
    }

    addDeleteButtonEventListener(product) {
        const button = this.element.querySelector('.delete')
        if (button) {
            button.addEventListener('click', async () => {
                const answer = confirm('¿Seguro que quieres borrar el producto?')
                if (answer === true) {
                    PubSub.publish(PubSub.events.SHOW_LOADING)
                    button.setAttribute('disabled', 'disabled')
                    try {
                        await DataService.deleteProduct(product.id)
                        window.location.href = '/?message=product-deleted'
                    } catch (error) {
                        PubSub.publish(PubSub.events.SHOW_ERROR, error)
                        button.removeAttribute('disabled')
                    } finally {
                        PubSub.publish(PubSub.events.HIDE_LOADING)
                    }
                }
            })
        }
    }

}
