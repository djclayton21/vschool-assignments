const redbox = document.getElementsByClassName("red-box")[0]
let coords = document.createElement("div")
coords.style.textAlign = "center";
redbox.appendChild(coords);
coords.style.position = "relative";
coords.style.paddingTop = "50%"
coords.style.fontWeight = "bold"
coords.style.fontSize = "xx-large"

redbox.addEventListener("mousemove", function (e){
    let x = e.clientX
    let y = e.clientY
    coords.textContent = x + ", " + y
})

