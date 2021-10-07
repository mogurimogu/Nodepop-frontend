import ProductoController from './controllers/ProductoController.js'
import LoaderController from './controllers/LoadController.js'
import MessageController from './controllers/MessageController.js'

window.addEventListener('DOMContentLoaded', function(){
    
    const productsArea = document.querySelector('#product-area')
    new ProductoController(productsArea)
    
    const loaderDiv = document.querySelector('.loader')
    new LoaderController(loaderDiv)

    const errorDiv = document.querySelector('.error')
    new MessageController(errorDiv)


})