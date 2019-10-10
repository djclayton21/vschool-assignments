const express = require('express');
const app = express();



app.use(express.json())

app.use('/todos', require('./routes/todosRouter.js'))

app.listen(7890, () => console.log('Server is running on port 7890'))