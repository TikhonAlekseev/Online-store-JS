export default class Bids {
    constructor(){

    }

    async getBids(){
        try{
            const queryString =  'http://jsproject.webcademy.ru/bids'
            this.allBids = await(await fetch(queryString)).json()
        }catch(err){
            alert('Problems with getting bids')

        }
       
    }
}