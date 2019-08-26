const redbox = document.getElementsByClassName("red-box")[0]

redbox.addEventListener("mousemove", function(e){
    let x = e.clientX
    let y = e.clientY
    redbox.textContent = x + ", " + y
})

