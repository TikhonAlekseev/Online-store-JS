export default class Filter {

    constructor(){
        this.query = ""
    }
 
    async getParams(){
        try{
            const querySring = 'http://jsproject.webcademy.ru/itemsinfo'
            this.params = await(await fetch(querySring)).json()
            
        }
        catch(err){alert(err)}
    }
    async getResults(){
        const querySring = `http://jsproject.webcademy.ru/items${this.query}`
        this.result  =  await(await fetch (querySring )).json()
       
    }
}