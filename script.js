var mess = "Hello World"
//alert( mess ) // affiche un popup avec le message
console.log("Hello...") // affiche dans la console

const element = document.getElementById("test")
console.log(element)
element.innerHTML = "Hello World"

let el2 = document.getElementById("id_div2")
el2.addEventListener("click", (ev) => {
    ev.target.innerHTML = "New text"
})

let el3 = document.getElementById("id_div3")
el3.addEventListener("click", test)

function test(ev) {
    ev.target.innerHTML = "New text"
    window.aa = ev.target
}

function changeText(id) {
    id.innerHTML = "New text"
}