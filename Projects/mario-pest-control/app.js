document.addEventListener("submit", calculate)
const result = document.getElementById("result")

function calculate(e){
    e.preventDefault()
    let goombasValue = document.baddies.goombas.value * 5;
    let bobombsValue = document.baddies.bobombs.value * 7;
    let cheepsValue = document.baddies.cheeps.value * 11;
    let totalValue = goombasValue + bobombsValue + cheepsValue;
    result.textContent = totalValue;

}