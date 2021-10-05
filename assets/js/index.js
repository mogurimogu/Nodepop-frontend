import ProductoController from './controllers/ProductoController.js'

window.addEventListener('DOMContentLoaded', function(){
    
    const productsArea = document.querySelector('#product-area')

    new ProductoController(productsArea)
    
    

})