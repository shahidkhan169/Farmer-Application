const mongoose = require("mongoose");
const fileSchema = new mongoose.Schema({
    name: { type: String, required: false },
    data: { type: Buffer, required: false },
    contentType: { type: String, required: false },
  });
const farmerRegSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dob: { type: Date, required: true },
  age: { type: String, required: true },
  gender: { type: String, required: true },
  phoneNumber: { type: Number, required: true, unique: true },
  village: { type: String },
  city: { type: String },
  district: { type: String, required: true },
  state: { type: String, required: true },
  postalcode: { type: String, required: true },
  land: { type: String },
  landAcre: { type: Number, required: true },
  AadharNumber: { type: Number, required: true },
  farmerCard: [fileSchema],
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  valid: { type: Boolean, default: false },
});



const farmerReg = mongoose.model("FarmerRegistration", farmerRegSchema);
module.exports = farmerReg;
