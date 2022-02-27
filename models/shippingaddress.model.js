const mongoose = require("mongoose");
shippingAddressSchema = new mongoose.Schema({
    id: Number,
    Zip_code: String,
    State: String,
    Street: String,
    Landmark: String,
    City: String,
    Phone_no: String,
    Name: String,
    User_id: Varchar9
});
module.exports = mongoose.model("shippingAddress", shippingAddressSchema);