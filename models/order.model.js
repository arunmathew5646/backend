const mongoose = require("mongoose");
orderSchema = new mongoose.Schema({
    id: Number,
    amount: Doubleprecision,
    order_date: Date,
    Product_product_id: Number,
    shipping_address_id: Number,
    user_id: Number 
});
module.exports = mongoose.model("Order", orderSchema);