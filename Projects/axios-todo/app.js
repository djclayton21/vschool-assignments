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

//create new todo
function createTodo(todo) {
    todoContainer = document.createElement("div")
    todoContainer.className = "todo-container"
    todoContainer.id = `${todo._id}`
    addCheckbox(todo, todoContainer)
    if (todo.imgUrl || todo.price || todo.description){
        filledTodo(todo, todoContainer)
    } else {
        titleOnly(todo, todoContainer)
    }
    addDelete(todoContainer)
    // addButtons()
    return todoContainer
}
//completed checkbox

function addCheckbox(item, container){
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function(e){
        completeToggle(e, item)
    })
    if (item.completed) {
        checkbox.checked = true
    }
    container.appendChild(checkbox)
}
function titleOnly(item, container) {
    const title = document.createElement("span")
    title.textContent = item.title
    if (item.completed){
        title.className = "todo-completed"
    }
    container.appendChild(title)
}
//delete button
function addDelete(container){
    const deleteButton = document.createElement("button")
    deleteButton.addEventListener("click", function() {
        deleteTodo(container.id)
    })
    deleteButton.textContent = "Delete"
    deleteButton.className = "delete-button"
    container.appendChild(deleteButton)
}

function filledTodo(item, container){
    const content = document.createElement("details")

    //title/dropdown
    const summary = document.createElement("summary")
    const title = document.createElement("span")
    title.textContent = item.title
    if (item.completed){
        title.className = "todo-completed"
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
    console.log(newPostObj)
    axios.post("https://api.vschool.io/Dan/todo/", newPostObj)
        .then(response => {
            const newPostConfirm = response.data
            const newTodo = createTodo(newPostConfirm)
            listContainer.appendChild(newTodo)
        })
        .catch(error => console.log(error))
    e.target.parentElement.open = false
}
//PUT complete or incomplete
function completeToggle(e, item){
    const isCompletedObj = {}
    if(item.completed){
        isCompletedObj.completed = false 
    } else {
        isCompletedObj.completed = true
    }
    console.log(isCompletedObj)
    axios.put(`https://api.vschool.io/Dan/todo/${e.target.parentElement.id}`, isCompletedObj)
    .then(response => {
        const updated = response.data
        console.log(updated)
        const updatedTodo = createTodo(updated)
        updateCurrent(updatedTodo, e.target.parentElement.id)
    })
    .catch(error => console.log(error))
}

function updateCurrent(update,id){
    //remove old parts
    
    const elementToUpdate = document.getElementById(`${id}`)
    while (elementToUpdate.children.length){
        elementToUpdate.removeChild(elementToUpdate.firstChild)
    }
    //add new parts
    while (update.children.length){
        let oldPart = update.removeChild(update.firstChild)
        elementToUpdate.appendChild(oldPart)
    }
}
//DELETE old todos
function deleteTodo(id) {
    const toDelete = document.getElementById(id)
    axios.delete(`https://api.vschool.io/Dan/todo/${id}`)
        .then(response => {
            console.log(response)
            listContainer.removeChild(toDelete)
        })
        .catch(error => console.log(error))
    
}