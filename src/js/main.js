import HomePage from "./pages/HomePage"
import BidsPage from "./pages/BidsPage"
import SingleItemPage from "./pages/SingleItemPage"
import FavouritesPage from "./pages/FavouritesPage"
import EventImmiter from "./utils/EventEmitter"
import Favourites from "./favourites/favouritesModel"
import ErrorPage from "./pages/404"

const state = {
    emmiter: new EventImmiter(),
    favourites: new Favourites
}
window.state = state

 const routes = [
     {path:"/" , component:HomePage},
     {path:"item" , component:SingleItemPage },
     {path:"favourites" , component:FavouritesPage},
     {path:"bids" , component:BidsPage }
 ]

function findComponent(path , routes){
    return routes.find(function(route){
        return route.path === path
    })
}

function renderComponent(){
  
    const path = location.hash.split('/')
    let currentPath = path[0] === "" ? "/":path[1]
 
    currentPath = currentPath === "" ? "/" : currentPath
    state.routeParams = path[2] ? path[2] : ""
    const {component = ErrorPage }  = findComponent(currentPath , routes) || {}
    
    component(state)
    
}


window.addEventListener('hashchange' ,renderComponent)

window.addEventListener('load' ,renderComponent)












