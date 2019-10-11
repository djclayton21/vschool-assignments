const mongoose = require('mongoose');
const { Schema } = mongoose;

const bountySchema = new Schema({
    firstName: String,
    lastName: String,
    isLiving: Boolean,
    bountyAmt: Number,
    order: {
        type: String,
        enum: ['Sith', 'Jedi']
    }
})

module.exports = mongoose.model('Bounty', bountySchema)