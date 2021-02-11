export default class FavouritesCard {
    constructor(favslist){
        this.favslist = favslist
    }
    async getFavs(){

        const ids = this.favslist.toString()
        if(ids === ""){
            this.cards = []
        }else{
            const queryString =  `http://jsproject.webcademy.ru/items?ids=${ids}`
            this.cards = await(await fetch(queryString)).json()
        }
        
    }   
}