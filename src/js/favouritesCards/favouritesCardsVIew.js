export function renderContainer(){
    const markup = `
    <div class="container p-0 mb-5">
        <div class="heading-1">Избранное</div>
    </div>

    <div class="cards-wrapper">
        <div class="container p-0">
            <div id="cardsHolder" class="row">
            </div>
        </div>
    </div>
`
    document.querySelector('#app').insertAdjacentHTML("beforeend",markup)
}
function renderCard(obj){
    const cardsContainer = document.querySelector('#cardsHolder')
    const markup = `


 <article class="col-md-4">
           
            <a href="#/item/${obj.id}" class="card" data-id ="${obj.id}">
                <div class="card__header">
                    <div class="card__title">
                        ${obj.complex_name}
                    </div>
                    <div class="card__like card__like--active">
                        <i class="fas fa-heart"></i>
                    </div>
                </div>
                <div class="card__img">
                    <img src=${obj.image} alt="План квартиры" />
                </div>
                <div class="card__desc">
                    <div class="card__price">
                        <div class="card__price-total">
                           ${obj.price_total}
                        </div>
                        <div class="card__price-per-meter">
                            ${obj.price_sq_m} ₽/м2
                        </div>
                    </div>

                    
                    <div class="card__params params">
                        <div class="params__item">
                            <div class="params__definition">
                                Комнат
                            </div>
                            <div class="params__value">${obj.rooms}</div>
                        </div>
                        <div class="params__item">
                            <div class="params__definition">
                                Площадь
                            </div>
                            <div class="params__value">${obj.square}</div>
                        </div>
                    </div>
                
                </div>
                <div class="card__footer">
                    <div class="card__art">${obj.scu}</div>
                    <div class="card__floor">Этаж ${obj.floor} из ${obj.floors_total}</div>
                </div>
            </a> `
    cardsContainer.insertAdjacentHTML("beforeend" , markup)
    

}
export function togleFavouriteIcon(elementIcon,isFaved){
    if(isFaved){
        elementIcon.classList.add('card__like--active')
    }else{
        elementIcon.classList.remove('card__like--active')
    }
}

export function renderPage(cards){
    const markup = `<div><h1 class="container">Список избранного пуст</h1></div>`
    renderContainer()
    if(cards.length !== 0){
        cards.forEach(item =>{
            renderCard(item)
        })
    }
    else if (cards.length === 0) {
        document.querySelector('#app').insertAdjacentHTML("beforeend" , markup)
    }
    
}

