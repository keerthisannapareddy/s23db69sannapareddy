const mongoose = require("mongoose");

const soapsSchema = mongoose.Schema({
  ice_name:  {type:String , required: true, minLength:[1,'itemname']},
  number_of_scoops: { type: Number, required: true,min: 0, max: 60},
  ice_price: {type:String,required: true,maxLength:[8]}, 
});

module.exports = mongoose.model("soaps", soapsSchema);