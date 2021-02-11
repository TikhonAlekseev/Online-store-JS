export default class Favourites {
    constructor(){
        this.favs = []
        this.readStorage()
    }

    addFav(id){
        this.favs.push(id)
        this.saveData()
    }
    removeFav(id){
        this.favs = this.favs.filter(item => item !== id)
        this.saveData()
    }

    isFav(id){
       return this.favs.indexOf(id) === -1 ? false : true
    }

    toggleFav(id){ 
        this.isFav(id)? this.removeFav(id) :  this.addFav(id)
    }

    saveData(){
        localStorage.setItem('favs', JSON.stringify(this.favs))
    }
    readStorage(){
        const storage = JSON.parse(localStorage.getItem('favs'))
        if(storage) this.favs = storage
    }


}