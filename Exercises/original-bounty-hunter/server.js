const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose')
const app = express();
const PORT = 7890;

//universal middleware
app.use(express.json());
app.use(morgan('dev'));

//connect to db
mongoose.connect('mongodb://localhost:27017/originalBountyHunter',
    {
        useNewUrlParser: true,
        useFindAndModify: true,
        useCreateIndex: false,
        useUnifiedTopology: true
    }
)   .then(() => console.log('connected to database'))
    .catch(err => console.log(err));
    
//routes
app.use('/bounties', require('./routes/bountiesRouter.js'));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));