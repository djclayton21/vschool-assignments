const express = require('express');
const app = express();

const morgan = require('morgan')

const mongoose = require('mongoose')


app.use(morgan('dev'))

app.use(express.json())

mongoose.connect("mongodb://localhost:27017/todosDB",
{
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: false,
    useUnifiedTopology: true
}, () => console.log('connected to the DB'))

app.use('/todos', require('./routes/todosRouter.js'))

app.listen(7890, () => console.log('Server is running on port 7890'))