const express = require('express');
const app = express();
const PORT = 7890;


app.use(express.json());

app.use('/bounties', require('./routes/bountiesRouter.js'));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));