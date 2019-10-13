const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InventorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    categories: {
        type: [String],
        enum: ['hiking', 'climbing', 'skiing', 'backpacking', 'camping', 'summer', 'winter']
    }
});

module.exports = mongoose.model('Item', InventorySchema)