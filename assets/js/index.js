import ProductoController from './controllers/ProductoController.js'
import LoaderController from './controllers/LoadController.js'

window.addEventListener('DOMContentLoaded', function(){
    
    const productsArea = document.querySelector('#product-area')
    new ProductoController(productsArea)
    
    const loaderDiv = document.querySelector('.loader')
    new LoaderController(loaderDiv)


})