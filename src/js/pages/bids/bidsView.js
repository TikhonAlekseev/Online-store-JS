export function renderContainer(){

    const markup = `
    
        <div class="container p-0 mb-5">
            <div class="heading-1">Заявки</div>
        </div>
        <div class="panels-wrapper">
        <div id="allBids" class="container p-0">
        </div>
        </div>
    `
    document.querySelector('#app').insertAdjacentHTML('beforeend',markup)

   
}

export function renderBid(obj){
    const markup = `
    <div class="panel panel--no-hover">
        <div class="panel__bidname">${obj.name}</div>
        <div class="panel__bidphone">${obj.phone}</div>
    </div>
    `
    document.querySelector('#allBids').insertAdjacentHTML('beforeend',markup)
}

export function renderBids(bids){
    
    for(let i = 0 ; i < 10 ; i++){
        renderBid(bids[i])
    }
}

