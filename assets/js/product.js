import LoaderController from "./controllers/LoadController.js"
import MessageController from "./controllers/MessageController.js"
import ProductDetailController from "./controllers/ProductDetailController.js"

window.addEventListener('DOMContentLoaded', function() {

    const messagesDiv = document.querySelector('.error')
    new MessageController(messagesDiv)

    const loaderDiv = document.querySelector('.loader')
    new LoaderController(loaderDiv)

    // obtengo el ID del tweet a cargar de la URL
    const id = new URLSearchParams(window.location.search).get('id')
    
    // instanciamos el controlador del detalle del tweet
    const productContainer = document.querySelector('#product-detail')
    new ProductDetailController(productContainer, id)

})
