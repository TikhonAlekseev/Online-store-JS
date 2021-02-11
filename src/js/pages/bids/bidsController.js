import * as view from "./bidsView"
import Bids from "./bidsModel"
export default async function(state){
    view.renderContainer()

    if(!state.bids) state.bids = new Bids

    await state.bids.getBids()

    view.renderBids(state.bids.allBids)
    
    
}