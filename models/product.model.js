const mongoose = require("mongoose");
productSchema = new mongoose.Schema({
    product_id: Number,
    available_items: Number,
    category: Varchar2,
    created: Date,
    description: Varchar2,
    image_url: Varchar2,
    manufacturer: Varchar2,
    name: Varchar2,
    price: Doubleprecision,
    updated: Varchar2 
});
module.exports = mongoose.model("Product", productSchema);