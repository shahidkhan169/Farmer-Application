const FarmerRegistration = require("../models/FarmerRegModel");

module.exports.createFarmer = async (req, res) => {
  try {
    const {
      name,dob,age,gender,phoneNumber,village,city,district,state,postalcode,land,landAcre,AadharNumber,email,password, confirmPassword, valid,
    } = req.body;

    // Validate required fields
    if (
      !name ||
      !dob ||
      !age ||
      !gender ||
      !phoneNumber ||
      !village ||
      !city ||
      !district ||
      !state ||
      !postalcode ||
      !land ||
      !landAcre ||
      !AadharNumber ||
      !email ||
      !password ||
      !confirmPassword ||
      typeof valid === "undefined"
    ) {
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

    // Validate age
    if (isNaN(age) || age < 18) {
      return res
        .status(400)
        .json({ message: "Invalid age. Age must be a number and at least 18." });
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

    res
      .status(201)
      .json({ message: "Farmer registered successfully.", farmer });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server error. Please try again later.", error });
  }
};

module.exports.signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const farmer = await FarmerRegistration.findOne({ email });
    if (!farmer || farmer.password !== password) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    res.status(200).json({ message: "Farmer signed in successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports.getFarmerByEmail = async (req, res) => {
  try {
    const { email } = req.query;
    const farmer = await FarmerRegistration.findOne({email});
    if (!farmer) {
      return res.status(404).json({ message: "Farmer not found" });
    }
    const { password, ...userData } = farmer.toObject();
    res.status(200).json(userData);
  } 
  catch (err) {
    res.status(400).json({ message: err.message });
  }
}
module.exports.updateFarmer = async (req, res) => {
  try {
    const { email } = req.query;
    
    // Define the update object based on the fields provided in the request body
    const updateFields = {};
    const fieldsToUpdate = [
      "name",
      "dob",
      "age",
      "gender",
      "phoneNumber",
      "village",
      "city",
      "district",
      "state",
      "postalcode",
      "land",
      "landAcre",
      "AadharNumber",
      "password",
      "valid"
    ];

    fieldsToUpdate.forEach((field) => {
      if (req.body[field] !== undefined) {
        updateFields[field] = req.body[field];
      }
    });
    const farmer = await FarmerRegistration.findOneAndUpdate(
      { email },
      { $set: updateFields },
      { new: true }
    );

    if (!farmer) {
      return res.status(404).json({ message: "Farmer not found" });
    }

    res.status(200).json({ message: "Farmer data updated successfully.", farmer });

  } catch (error) {
    res.status(500).json({ message: "Failed to update the farmer data", error });
  }
};

module.exports.deleteFarmer = async (req, res) => {
  try {
    const { email } = req.query;
    const farmer = await FarmerRegistration.findOneAndDelete({ email });
    if (!farmer) {
      return res.status(404).json({ message: "Farmer not found" });
    }
    res.status(200).json({ message: "Farmer data deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete the farmer data", error });
  }
};

