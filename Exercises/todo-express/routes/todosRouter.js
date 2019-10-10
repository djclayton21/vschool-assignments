const todoRouter = require('express').Router()
const uuid = require('uuid/v4')

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

todoRouter.route('/')
    .get((req, res) => {
        res.send(todos)
    })
    .post((req, res) => {
        const newTodo = {
            ...req.body,
            _id: uuid()
        }
        todos.push(newTodo)
        res.send(newTodo)
    })

todoRouter.route('/:_id')
    .get((req, res) => {
        const todo = todos.find(todo => todo._id === req.params._id)
        res.send(todo)
    })
    .delete((req, res) => {
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
    .put((req, res) => {
        const todoToChange = todos.find(todo => {
            return todo._id === req.params._id;
        })
        const todoChanges = req.body;
        Object.assign(todoToChange, todoChanges)
 
        res.send(todoToChange)
    })

module.exports = todoRouter