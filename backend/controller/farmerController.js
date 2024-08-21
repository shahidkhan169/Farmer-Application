const FarmerRegistration = require("../models/FarmerRegModel");
const multer = require('multer');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');


// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
module.exports.createFarmer = [
  upload.fields([{ name: 'profilePhoto', maxCount: 1 }, { name: 'farmCard', maxCount: 5 }]),

  // Validation rules
  [
    body('fullName').notEmpty().withMessage('Full Name is required'),
    body('dob').isDate().withMessage('Valid Date of Birth is required'),
    body('age').notEmpty().withMessage('Age is required').isNumeric().withMessage('Age must be a number'),
    body('gender').notEmpty().withMessage('Gender is required'),
    body('phone').isLength({ min: 10, max: 10 }).withMessage('Valid 10-digit phone number is required'),
    body('village').notEmpty().withMessage('Village is required'),
    body('city').notEmpty().withMessage('City is required'),
    body('district').notEmpty().withMessage('District is required'),
    body('state').notEmpty().withMessage('State is required'),
    body('postalcode').isLength({ min: 6, max: 6 }).withMessage('Valid 6-digit postal code is required'),
    body('land').notEmpty().withMessage('Land details are required'),
    body('landacre').isNumeric().withMessage('Valid land area in acres is required'),
    body('aadhaar').isLength({ min: 12, max: 12 }).withMessage('Valid 12-digit Aadhaar number is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').notEmpty().withMessage('Password is required'),
    body('confirmPassword').notEmpty().withMessage('Confirm Password is required')
      .custom((value, { req }) => value === req.body.password).withMessage('Passwords must match')
  ],

  // Controller function
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Check if profile photo is provided
    if (!req.files['profilePhoto']) {
      return res.status(400).json({ message: 'Profile photo is required' });
    }

    // Check if farm card files are provided
    if (!req.files['farmCard']) {
      return res.status(400).json({ message: 'At least one farm card file is required' });
    }

    const {
      fullName, dob, age, gender, phone, village, city, district, state,
      postalcode, land, landacre, aadhaar, email, password
    } = req.body;

    try {
      // Check if email or Aadhaar number already exists
      const existingFarmer = await FarmerRegistration.findOne({ $or: [{ email }, { aadhaar }] });
      if (existingFarmer) {
        return res.status(400).json({ message: 'Email or Aadhaar number already exists' });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create farm card array
      const farmCardFiles = req.files['farmCard'].map(file => ({
        name: file.originalname,
        data: file.buffer,
        contentType: file.mimetype
      }));

      // Create new farmer document
      const newFarmer = new FarmerRegistration({
        fullName,
        dob,
        age,
        gender,
        phone,
        profilePhoto: req.files['profilePhoto'][0].buffer, // Store the profile photo buffer
        village,
        city,
        district,
        state,
        postalcode,
        land,
        landacre,
        aadhaar,
        email,
        password: hashedPassword,
        valid: false, // Default to not valid
        farmCard: farmCardFiles // Store the farm card files
      });

      // Save the farmer to the database
      await newFarmer.save();
      res.status(201).json({ message: 'Farmer created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  }
];

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

