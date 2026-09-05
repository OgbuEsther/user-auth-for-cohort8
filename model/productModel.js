const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    stock: { type: Boolean, default: true },
    quantity: { type: Number, required: true },
    image: { type: String, required: true },
}, { timestamps: true });

const productModel = mongoose.model('Product', productSchema);
module.exports = productModel