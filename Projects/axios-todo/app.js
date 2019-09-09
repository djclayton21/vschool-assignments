//grab todo container
const listContainer = document.getElementById("list-container")
//GET todos
    //get data
    axios.get("https://api.vschool.io/Dan/todo/")
    .then(res => {
        const todos = res.data
        todos.forEach(createTodo)
    })
    .catch(err => alert(err))
    //put data on site
    function createTodo(todo) {
        todoContainer = document.createElement("div")
        console.log(todoContainer)

        //name
        const todoName = document.createElement('h3')
        todoName.textContent = todo.title
        todoContainer.appendChild(todoName)
        //picture
        //desription
        //price
        
        //comleted? -> strikethrough
        listContainer.appendChild(todoContainer)
    }

//POST new todos

//PUT complete or incomplete

//DELETE old todos

