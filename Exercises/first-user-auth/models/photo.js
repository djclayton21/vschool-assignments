const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const photoSchema = new Schema({
    imgUrl: {
        type: String,
        required: true
    },
    caption: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

module.exports = mongoose.model('Photo', photoSchema)