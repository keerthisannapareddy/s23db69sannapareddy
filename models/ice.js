const mongoose = require("mongoose")
const iceSchema = mongoose.Schema({
ice_name: String,
number_of_scoops: String,
ice_price: Number
})
module.exports = mongoose.model("ice",
iceSchema)