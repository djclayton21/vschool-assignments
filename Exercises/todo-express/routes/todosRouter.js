const todoRouter = require('express').Router()
const Todo = require('../models/todo.js')

todoRouter.route('/')
    .get((req, res) => {
        Todo.find((err, todos) => {
            if (err){
                res.status(500)
                return(res.send(err))
            }
            return res.status(200).send(todos)
        })
    })
    .post((req, res) => {
    })

todoRouter.route('/:_id')
    .get((req, res) => {
    })
    .delete((req, res) => {
    })
    .put((req, res) => {
    })

module.exports = todoRouter