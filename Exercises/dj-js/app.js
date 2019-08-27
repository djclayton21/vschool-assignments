
let box = document.getElementById("box");

box.addEventListener("mouseover", function(){
    box.style.backgroundColor = "blue"
})
box.addEventListener("mouseout", function(){
    box.style.backgroundColor = "grey"
})
box.addEventListener("mousedown", function(){
    box.style.backgroundColor = "red"
})
box.addEventListener("mouseup", function(){
    box.style.backgroundColor = "yellow"
})
box.addEventListener("dblclick", function(){
    box.style.backgroundColor = "green"
})
const docBody = document.getElementById("body")
docBody.addEventListener("wheel", function(){
    box.style.backgroundColor = "orange"
})

document.addEventListener("keypress", keyColor)

function keyColor(e){
    switch (e.key) {
        case "b":
            box.style.backgroundColor = "blue"
            break
        case "r":
            box.style.backgroundColor = "red"
            break
        case "y":
            box.style.backgroundColor = "yellow"
            break
        case "g":
            box.style.backgroundColor = "green"
            break
        case "o":
            box.style.backgroundColor = "orange"
            break
        default :
            box.style.backgroundColor = "grey"
    }
}