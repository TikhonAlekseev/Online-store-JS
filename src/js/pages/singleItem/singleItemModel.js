export default class SingleItem {
    constructor(id){
        this.id = id
    }

    async getItem(){
        try{
            const querySring = `http://jsproject.webcademy.ru/items/${this.id}`
            this.result = await (await fetch(querySring)).json()
        }catch(err){err}
       
    }
    async submitForm(data){
        const queryString = 'http://jsproject.webcademy.ru/bidnew'
        const response = await fetch(queryString, {
            method:'POST',
            headers:{
                'Content-type':'application/json; charset=UTF-8'
            },
            body : JSON.stringify(data)
        })
        this.response = await (await response.json())

    }

   
}