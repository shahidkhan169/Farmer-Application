const mongoose = require('mongoose');

// File schema for profile photo and farm card
const fileSchema = new mongoose.Schema({
  name: { type: String, required: false },
  data: { type: Buffer, required: false },
  contentType: { type: String, required: false },
});

// Farmer registration schema
const farmerRegSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  dob: { type: Date, required: true },
  age: { type: String, required: true },
  gender: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
  profilePhoto: { type: Buffer, required: true }, // Profile photo as buffer
  village: { type: String, required: true },
  city: { type: String, required: true },
  district: { type: String, required: true },
  state: { type: String, required: true },
  postalcode: { type: String, required: true },
  land: { type: String, required: true },
  landacre: { type: Number, required: true },
  aadhaar: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  valid: { type: Boolean, default: false },
  farmCard: [fileSchema], // Farm card field
});

const FarmerRegistration = mongoose.model('FarmerRegistration', farmerRegSchema);

module.exports = FarmerRegistration;
