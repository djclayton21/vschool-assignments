const express = require('express');
const app = express();
//route to handle a get request to an endpoint
app.get('/', (request, response) => {
    response.send('Wooooooo!')
})

app.get('/somewhere', (request, response) => {
    response.send('whoaaaaa!')
})

app.listen(7890, () => {
    console.log('Server is running on port 7890')
})