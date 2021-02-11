import filter from "../filter/filterControler"
import listing from "../listing/listingController"


export default async function(state){
    document.querySelector('#app').innerHTML = ""
    await filter(state)
    listing(state)
}
