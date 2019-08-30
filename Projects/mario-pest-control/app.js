document.addEventListener("submit", calculate)
const result = document.getElementById("result")

function calculate(e){
    e.preventDefault()
    let goombasValue = document.form.goombas.value * 5;
    let bobombsValue = document.form.bobombs.value * 7;
    let cheepsValue = document.form.cheeps.value * 11;
    let totalValue = goombasValue + bobombsValue + cheepsValue;
    result.textContent = `${totalValue}`;

}