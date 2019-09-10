const display = document.getElementById("display")
const button = document.getElementById("click")
let count

if (!sessionStorage.getItem("count")){
    sessionStorage.setItem("count", 0)
}

display.textContent = sessionStorage.getItem("count");

button.addEventListener("click", increment)

function increment() {
    count = sessionStorage.getItem("count")
    count++
    display.textContent = count
    sessionStorage.setItem("count", count)
}

setTimeout(timeout, 10000)

function timeout(){
    button.disabled = true;
    display.textContent = `result: ${sessionStorage.getItem("count")}`
    sessionStorage.setItem("count", 0)
}
