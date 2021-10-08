export default{

    get: async function(url, errorMessage){
        const response = await fetch(url)
        if(response.ok){
            const data = await response.json()
            return data
        }else{
            throw new Error(errorMessage)
        }
    },

    post: async function(url, body) {
        const requestConfig = {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(body)
        }
        if (this.isAuthenticed()) {
            const token = localStorage.getItem('AUTH_TOKEN')
            requestConfig.headers['Authorization'] = `Bearer ${token}`
        }
        const response = await fetch(url, requestConfig)
        try {
            const data = await response.json()
            if (response.ok) {
                return data
            } else {
                throw new Error(data.message)
            }
        } catch (error) {
            throw error
        }
    },
    
    getProducts: async function(){
        const url = 'http://localhost:8000/api/anuncios'
        const errorMessage = 'Error al obtener los Productos'
        return await this.get(url, errorMessage)
    },

    registerUser: async function(username, password) {
        const url = 'http://localhost:8000/auth/register'
        return await this.post(url, {username, password})
    },

    login: async function(username, password) {
        const url = 'http://localhost:8000/auth/login'
        const data = await this.post(url, {username, password})
        const token = data.accessToken
        localStorage.setItem('AUTH_TOKEN', token)
    },

    createTweet: async function(text) {
        const url = 'http://localhost:8000/api/tweets'
        return this.post(url, { message: text })
    },

    isAuthenticed: function() {
        return localStorage.getItem('AUTH_TOKEN') !== null
    }



}