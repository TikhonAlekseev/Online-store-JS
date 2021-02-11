export default function Eror(){
    document.querySelector('#app').innerHTML = ""
    const markup = `<div><h1>Ошибка 404. Страница не найдена</h1></div>`

    document.querySelector('#app').insertAdjacentHTML('beforeend' , markup)
}