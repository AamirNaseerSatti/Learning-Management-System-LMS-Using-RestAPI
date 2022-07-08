var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    }
});
module.exports = mongoose.model('Product', productSchema);