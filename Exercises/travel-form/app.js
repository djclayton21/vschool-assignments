const customer= {
    diet: [],
}

document.addEventListener("submit", (e) => {
    e.preventDefault();
    customer.firstName = document.form["first-name"].value
    customer.lastName = document.form["last-name"].value
    customer.age = document.form.age.value
    customer.gender = document.form.gender.value
    customer.destination = document.form.destination.value
    for (let i = 0; i < document.form.diet.length; i++){
        if(document.form.diet[i].checked === true){
            customer.diet.push(document.form.diet[i].value)
        }
    }
    alert(`Name: ${customer.firstName} ${customer.lastName}\nAge: ${customer.age}\nGender: ${customer.gender}\nDesination: ${customer.destination}\nDiet: ${customer.diet}`
    )
})