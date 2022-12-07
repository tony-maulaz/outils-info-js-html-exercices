
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