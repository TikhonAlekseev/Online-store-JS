import * as view from "./listingView"

export default function(state){

    view.render(state.results)
    
    state.results.forEach(function(item){
        view.renderCard(item, state.favourites.isFav(item.id) )
        }
    )
    addToFavsListener()

    state.emmiter.subscribe('event:render-listing' , function(){
        view.clearListingContainer()

        state.results.forEach(function(item){
            view.renderCard(item,state.favourites.isFav(item.id) )
            }
        )
        addToFavsListener()
    })
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
    
