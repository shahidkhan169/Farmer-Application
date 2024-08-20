const FarmerPersonal = require('../../models/farmer.model');

const createFarmer = async (req, res) => {
    try {
        const { name, email, password, confirmPassword, farmName } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match" });
        }

        const existingUser = await FarmerPersonal.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const newFarmer = new FarmerPersonal({ name, email, password, farmName });
        await newFarmer.save();

        res.status(201).json({ message: "User created successfully" });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = {
    createFarmer,  // Exporting with the corrected function name
};
