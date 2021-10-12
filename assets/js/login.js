import LoginController from "./controllers/LoginController.js"
import MessageController from "./controllers/MessageController.js"

window.addEventListener('DOMContentLoaded', function(){

    const form = document.querySelector('#login')

    new LoginController(form)

    const messages = document.querySelector('.error')

    new MessageController(messages)

})
