const mongoose = require("mongoose");

const customerRegSchema = new mongoose.Schema({
  name: { type: String, required: true }, 
  dob: { type: Date, required: true },
  gender: { type: String, required: true },
  phoneNumber: { type: Number, required: true, unique: true },  
  aadharNumber: { type: Number, required: true },  
  village: { type: String },
  city: { type: String },
  district: { type: String, required: true },
  state: { type: String, required: true },
  postalcode: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const CustomerReg = mongoose.model("CustomerRegistration", customerRegSchema);
module.exports = CustomerReg;
