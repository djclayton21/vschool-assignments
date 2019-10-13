const express = require('express');
const app = express()
const mongoose = require('mongoose');
const morgan = require('morgan');
const PORT = 7890;

//universal middleware
app.use(express.json());
app.use(morgan('dev'));

//connect to DB
mongoose.connect('mongodb://localhost:27017/crud-store',
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true
    }
    , console.log('connected to mongodb')
);

//routes
app.use('/inventory', require('./routes/inventoryRouter.js'));

//handle errors
app.use((err, req, res, next) => {
    console.log(err);
    return res.send({errMsg: err.message})
});

//listen
app.listen(PORT, console.log(`server is running on port ${PORT}`));