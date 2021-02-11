import SingleItem from "./singleItemModel"
import * as view from "../singleItem/singleItemView"

export default async function(state){

    state.singleItem = new SingleItem(state.routeParams)
    await state.singleItem.getItem()
    view.render(state.singleItem.result , state.favourites.isFav(state.singleItem.id))

    document.querySelector('.button-order').addEventListener('click' , function(){
        view.showModal()
    })

    document.querySelector('.modal__close').addEventListener('click' , function(){
        view.hideModal()
    })

    document.querySelector('.modal-wrapper').addEventListener('click' , function(e){
        if(!e.target.closest('.modal')) 
        {
            view.hideModal()
        }
    })

    document.querySelector('.modal__form').addEventListener('submit' , async function(e){
        e.preventDefault()
        const formData = view.getInput()
        await state.singleItem.submitForm(formData)

        if(state.singleItem.response.message === "Bid Created"){
            alert("Заявка успешно добавлена ! ")
            view.hideModal()
            view.clearInput()
        }else{
            alert("Введены некорректные данные.Повторите отправку.")
        }
    })

    document.querySelector('.button-favourite').addEventListener('click',function(){
        state.favourites.toggleFav(state.singleItem.id)
        view.toggleFavBtn( state.favourites.isFav(state.singleItem.id))
    })

}