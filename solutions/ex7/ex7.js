function load(){
    setName()
    setWidth()
}

function setName(){

    const input = document.getElementById("input-name")
    let name = input.value

    console.log("input name : " + name)
    
    // Save the name in the local storage
    if( name != "" )
        localStorage.setItem("name", name)

    console.log(localStorage)

    name = localStorage.getItem("name")
    console.log("local storage name : " + name)
    if( name == null || name == ""){
        name = "John Doe"   
    }

    const span = document.getElementById("text-name")
    span.innerHTML = name
}

function setWidth(){

    const input = document.getElementById("input-width")
    let width = input.value

    console.log("input width : " + width)
    
    // Save the width in the local storage
    if( width != "" )
        localStorage.setItem("width", width + "px")

    console.log(localStorage)

    width = localStorage.getItem("width")
    console.log("local storage width : " + width)
    if( width != null && width != ""){   
        const div = document.getElementById("div1")
        div.style.width = width
    }
}