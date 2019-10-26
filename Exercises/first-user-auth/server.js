const express = require('express');
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')
const app = express();
const morgan = require('morgan');
require('dotenv').config()
const PORT = process.env.PORT || 7890;

//universal middleware
app.use(morgan('dev'));
app.use(express.json());

//connect to db
mongoose.connect('mongodb://localhost:27017/firstauthdb',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    } 
,() => console.log('connected to DB'))

//routes
app.use('/api', expressJwt({secret: process.env.SECRET}));
app.use('/auth', require('./routes/authRouter.js'));

app.use('/api/photos', require('./routes/photoRouter.js'));

//error handling
app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        res.status(err.status);
    }
    console.log(err);
    return res.send({errMsg: err.message});
}) 
//listen

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));