//grab todo container
const listContainer = document.getElementById("list-container")

//GET todos///////////////////////

//get data
axios.get("https://api.vschool.io/Dan/todo/")
.then(res => {
    const todos = res.data
    for (let i = 0; i < todos.length; i++){
        let newTodo = createTodo(todos[i])
        listContainer.appendChild(newTodo)
    }
})
.catch(err => console.log(err))

//put data on site
function createTodo(todo) {
    console.dir(todo)
    todoContainer = document.createElement("div")
    todoContainer.className = "todo-container"
    todoContainer.id = `container-${todo._id}`
    if (todo.completed){
        todoContainer.classList.toggle("todo-completed")
    }
    checkbox(todo, todoContainer)
    if (todo.imgUrl || todo.price || todo.description){
        filledTodo(todo, todoContainer)
    } else {
        titleOnly(todo, todoContainer)
    }
    // addButtons()
    return todoContainer
}
//completed checkbox

function checkbox(item, container){
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", completeToggle)
    if (item.completed) {
        checkbox.checked = true
    }
    container.appendChild(checkbox)
}
function titleOnly(item, container) {
    const title = document.createElement("span")
    title.textContent = item.title
    container.appendChild(title)
}

function filledTodo(item, container){
    const content = document.createElement("details")

    //title/dropdown
    const summary = document.createElement("summary")
    const title = document.createElement("span")
    title.textContent = item.title
    if (item.completed){
        title.className = "todo-completed"
    } else {
        title.className = "todo-pending"
    }
    summary.appendChild(title)
    content.appendChild(summary)

    //cointainer
    const infoContainer = document.createElement("div")
    infoContainer.className = "todo-details"


    //picture
    if (item.imgUrl){    
        const todoImg = document.createElement("img")
        todoImg.src = item.imgUrl
        todoImg.alt = "to-do image"
        todoImg.className = "todo-img"
        infoContainer.appendChild(todoImg)
    }

    //right container
    const todoRight = document.createElement("div")
    todoRight.className = "todo-right"
    
    //price
    if (item.price){
        const todoPrice = document.createElement("div")
        todoPrice.textContent = `$${item.price}`
        todoPrice.className = "todo-price"
        todoRight.appendChild(todoPrice)
    }
    //desription
    if (item.description){
        const todoDescription = document.createElement("div")
        todoDescription.textContent = item.description
        todoDescription.className = "todo-description"
        todoRight.appendChild(todoDescription)
    }
    //create buttons


    //put everything in container
    if (item.price || item.description){
        infoContainer.appendChild(todoRight)
    }
    content.appendChild(infoContainer)
    container.appendChild(content)
}
//POST new todos
const newPostBtn = document.getElementById("new-post");
const postDialog = document.getElementById("post-dialog")
console.dir(postDialog)
document.post.addEventListener("submit", newPost)

newPostBtn.addEventListener("click", postPopUp)

function postPopUp(){
    postDialog.open = true
}

function newPost(e){
    e.preventDefault()
    const newPostObj = {
        title: document.post.title.value
    }
    if (document.post.img.value){
        newPostObj.imgUrl = document.post.img.value
    }
    if (document.post.price.value){
        newPostObj.price = document.post.price.value
    }
    if (document.post.description.value){
        newPostObj.description = document.post.description.value
    }

    axios.post("https://api.vschool.io/Dan/todo/", newPostObj)
        .then(response => {
            const newPostConfirm = response.data
            console.dir(newPostConfirm)
            const newTodo = createTodo(newPostConfirm)
            listContainer.appendChild(newTodo)
        })
        .catch(error => console.log(error))
}
//PUT complete or incomplete
function completeToggle(e){
    const isCompletedObj = {}
    if(e.target.parentElement.classList.contains("todo-completed")){
        isCompletedObj.completed = false 
    } else {
        isCompletedObj.completed = true
    }
    axios.put(`https://api.vschool.io/Dan/todo/${e.target.parentElement.id}`, isCompletedObj)
    .then(response => {
        updateCompleted = response.data
        updateCurrent(updateCompleted)
    })
    .catch(error => console.log(error))
}

function updateCurrent(update){
    console.log(update)
}
//DELETE old todos
