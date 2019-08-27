const resultValue = document.getElementById("result-value")
let result = 0;


document.addForm.addEventListener("submit", function(e){
    e.preventDefault();
    let addNum1 = Number(document.addForm.num1.value);
    let addNum2 = Number(document.addForm.num2.value);
    result = addNum1 + addNum2;
    resultValue.textContent = result;
})
document.subtractForm.addEventListener("submit", function(e){
    e.preventDefault();
    let subtractNum1 = Number(document.subtractForm.num1.value);
    let subtractNum2 = Number(document.subtractForm.num2.value);
    result = subtractNum1 - subtractNum2;
    resultValue.textContent = result;
})
document.multiplyForm.addEventListener("submit", function(e){
    e.preventDefault();
    let multiplyNum1 = Number(document.multiplyForm.num1.value);
    let multiplyNum2 = Number(document.multiplyForm.num2.value);
    result = multiplyNum1 * multiplyNum2;
    resultValue.textContent = result;
})