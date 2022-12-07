function load(){
    test()
}

function test(){
    console.log("test")
    console.log(localStorage)

    localStorage.test1 = 10
    localStorage.setItem("test2", 20)
    localStorage["test3"] = 30

    console.log(localStorage.test1)
    console.log(localStorage.getItem("test2"))
    console.log(localStorage["test3"])
}

function setName(){
    console.log("input name : " + name)    
}

function setWidth(){
    const input = document.getElementById("input-width")
    console.log("Input width : " + input.value)
}