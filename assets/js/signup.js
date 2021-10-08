import MessageController from './controllers/MessageController.js'
import SignupController from './controllers/SignupController.js'

window.addEventListener('DOMContentLoaded', function(){
    
    const signupForm = document.querySelector('#signup')
    
    new SignupController(signupForm)
    
    const errorDiv = document.querySelector('.error')

    new MessageController(errorDiv)

})