const express = require('express');
const uuid = require('uuid')
const app = express();

const todos = [
    {
        name: "todo 1",
        description: "The description of the todo",
        imageUrl: "http://www.myimage....",
        completed: false,
        _id: uuid()
    },
    {
        name: "todo 2",
        description: "The description of the todo",
        imageUrl: "http://www.myimage2....",
        completed: true,
        _id: uuid()
    },
    {
        name: "todo 3",
        description: "The description of the todo",
        imageUrl: "http://www.myimage3....",
        completed: false,
        _id: uuid()
    },
]
//add body
app.use(express.json())

//get all
app.get('/todos', (req, res) => {
    res.send(todos)
})

//get one by id
app.get('/todos/:_id', (req, res) => {
    const todo = todos.find(todo => todo._id = req.params._id)
    res.send(todo)
})

//post
app.post('/todos', (req, res) => {
    const newTodo = {
        ...req.body,
        _id: uuid()
    }
    todos.push(newTodo)
    res.send(newTodo)
})

//delete by id
app.delete('/todos/:_id', (req, res) => {
    const indexToDelete = todos.findIndex(todo => {
        return todo._id === req.params._id
    })
    const isDeletable = indexToDelete >= 0
    if (isDeletable) {
        const titleToDelete = todos[indexToDelete].name
        todos.splice(indexToDelete, 1)
        res.send(`DESTROYED ${titleToDelete}`)
    } else {
        res.send('record not found')
    }
})

//put by id
app.put('/todos/:_id', (req, res) => {
    const indexToChange = todos.findIndex(todo => {
        return todo._id === req.params._id;
    })
    const oldTodo = todos[indexToChange];
    const todoChanges = req.body;
    const newTodo = Object.assign(oldTodo, todoChanges)

    todos.splice(indexToChange, 1, newTodo)

    res.send(newTodo)
})
app.listen(7890, () => console.log('Server is running on port 7890'))