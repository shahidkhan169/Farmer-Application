const FarmerRegistration = require("../models/FarmerRegModel");

module.exports.createFarmer = async (req, res) => {
  try {
    const {
      name,
      dob,
      age,
      gender,
      phoneNumber,
      village,
      city,
      district,
      state,
      postalcode,
      land,
      landAcre,
      AadharNumber,
      email,
      password,
      confirmPassword,
      valid,
    } = req.body;

    // Validate required fields
    if (!name || !dob || !age || !gender || !phoneNumber || !village || !city || !district || !state || !postalcode || !land || !landAcre || !AadharNumber || !email || !password || !confirmPassword || typeof valid === 'undefined') {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Validate phone number (10 digits)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phoneNumber)) {
      return res.status(400).json({ message: "Invalid phone number." });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format." });
    }

    // Validate password match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match." });
    }

    // Validate age (optional)
    if (isNaN(age) || age < 18) {
      return res.status(400).json({ message: "Invalid age. Age must be a number and at least 18." });
    }

    // Validate postal code (6 digits)
    const postalCodeRegex = /^\d{6}$/;
    if (!postalCodeRegex.test(postalcode)) {
      return res.status(400).json({ message: "Invalid postal code." });
    }

    // Additional validations can be added as needed

    // Create new Farmer instance
    const farmer = new FarmerRegistration({
      name,
      dob,
      age,
      gender,
      phoneNumber,
      village,
      city,
      district,
      state,
      postalcode,
      land,
      landAcre,
      AadharNumber,
      email,
      password,
      valid,
    });

    // Save farmer to the database
    await farmer.save();

    res.status(201).json({ message: "Farmer registered successfully.", farmer });
  } catch (error) {
    res.status(500).json({ message: "Server error. Please try again later.", error });
  }
};
