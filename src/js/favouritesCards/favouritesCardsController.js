import FavouritesCard from "./favouritesCardsModel"
import * as view from "./favouritesCardsView"

export default async function(state){
    const favsList = state.favourites.favs
    const favouritesCards = new FavouritesCard(favsList)
    await favouritesCards.getFavs()

    view.renderPage(favouritesCards.cards)
    addToFavsListener()


    function addToFavsListener(){
        Array.from(document.getElementsByClassName('card__like')).forEach(item =>{
            item.addEventListener('click', function(e){
                e.preventDefault()
                const currentId = e.target.closest('.card').dataset.id
                state.favourites.toggleFav(currentId)
                view.togleFavouriteIcon( e.target.closest('.card__like') , state.favourites.isFav(currentId) )
            })
    
        })
    }
}