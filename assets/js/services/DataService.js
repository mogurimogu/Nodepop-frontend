export default{

    post: async function(){
        return await this.request('POST', url, body)
    },    

    put: async function(){
        return await this.request('PUT', url, body)
    },

    delete: async function(){
        return await this.request('DELETE', url, body)
    },

    getProducts: async function(){
        const url = 'http://localhost:8000/api/anuncios?_expand=user'
        const response = await fetch(url)
        if(response.ok){
            const anuncios = await response.json()
            return anuncios
        }else{
            throw new Error('Error al obtener los productos')
        }
    }


}