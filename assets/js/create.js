import TweetFormController from "./controllers/NewProductController.js"
import MessageController from "./controllers/MessageController.js"
import DataService from "./services/DataService.js"
import NewProductController from "./controllers/NewProductController.js"

window.addEventListener('DOMContentLoaded', function(){

    if (DataService.isAuthenticed() === false) {
        window.location.href = '/login.html?next=/new.html'
    }

    const form = document.querySelector('#create-product')
    new NewProductController(form)

    const messages = document.querySelector('.error')
    new MessageController(messages)

})
