const mongoose = require('mongoose')
const { Schema } = mongoose;

const todoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    isCompleted: {
        type: Boolean,
        default: true
    },
    imgUrl: String,
    price: Number
})

module.exports = mongoose.model("Todo", todoSchema)