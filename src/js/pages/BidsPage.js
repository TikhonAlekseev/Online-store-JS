import Bids from "./bids/bidsController"
export default function(state){
    document.querySelector("#app").innerHTML = ""
    Bids(state)

}