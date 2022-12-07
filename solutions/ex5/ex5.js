
function addClass(button){
    const div = document.getElementById("div1")
    window.test = div

    const className = "c3"
    if (div.classList.contains(className)){
        div.classList.remove(className)
        button.innerHTML = "Add class"
    }
    else{
        div.classList.add(className)
        button.innerHTML = "Remove class"
    }

    document.getElementById("class_list").innerHTML = div.classList
}