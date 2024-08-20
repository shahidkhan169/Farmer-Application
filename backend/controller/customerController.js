const customerReg= require('../models/CustomerRegModel');
const dotenv = require('dotenv');
dotenv.config();
const nameRegex = /^[A-Za-z\s]+$/;
const phoneNumberRegex = /^\d{10}$/;
const aadharNumberRegex = /^\d{12}$/;
const postalcodeRegex = /^[A-Za-z0-9\s]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

module.exports.customerRegister = async (req, res) => {
    try {
        const {
            name,
            dob,
            gender,
            phoneNumber,
            aadharNumber,
            village,
            city,
            district,
            state,
            postalcode,
            email,
            password,
            confirmPassword
        } = req.body;

        // Validate all required fields
        if (!name || !dob || !gender || !phoneNumber || !aadharNumber || !district || !state || !postalcode || !email || !password || !confirmPassword) {
            return res.status(400).send('All fields are required');
        }

        // Validate name
        if (!nameRegex.test(name)) {
            return res.status(400).send('Invalid name format');
        }

        // Validate phone number
        if (!phoneNumberRegex.test(phoneNumber)) {
            return res.status(400).send('Invalid phone number format');
        }

        // Validate Aadhar number
        if (!aadharNumberRegex.test(aadharNumber)) {
            return res.status(400).send('Invalid Aadhar number format');
        }

        // Validate postal code
        if (!postalcodeRegex.test(postalcode)) {
            return res.status(400).send('Invalid postal code format');
        }

        // Validate email
        if (!emailRegex.test(email)) {
            return res.status(400).send('Invalid email format');
        }

        // Validate password
        if (!passwordRegex.test(password)) {
            return res.status(400).send('Password must be at least 8 characters long and include uppercase, lowercase, digit, and special character');
        }

        // Check if password and confirmPassword match
        if (password !== confirmPassword) {
            return res.status(400).send('Password and Confirm Password do not match');
        }

        // Check if either village or city is provided
        if (!village && !city) {
            return res.status(400).send('Either village or city must be provided');
        }
        if (village && city) {
            return res.status(400).send('Only one of village or city can be provided');
        }

        // Create a new customer instance
        const newCustomer = new customerReg({
            name,
            dob,
            gender,
            phoneNumber,
            aadharNumber,
            village,
            city,
            district,
            state,
            postalcode,
            email,
            password
        });

        // Save the customer to the database
        await newCustomer.save();

        res.status(200).json({
            success: true,
            message: 'Customer registered successfully',
            customer: {
                name,
                dob,
                gender,
                phoneNumber,
                aadharNumber,
                village,
                city,
                district,
                state,
                postalcode,
                email
            }
        });
    } catch (err) {
        if (err.code === 11000) {
            res.status(400).json({ message: 'Email or phone number already exists' });
        } else {
            res.status(400).json({ message: 'Error creating customer', error: err.message });
        }
    }
};



module.exports.customerLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate email and password fields
        if (!email || !password) {
            return res.status(400).send('Email and Password are required');
        }

        // Find the user by email
        const user = await customerReg.findOne({ email });
        if (!user) {
            return res.status(401).send('Invalid email or password');
        }

        // Check if the provided password matches the stored password
        if (user.password !== password) {
            return res.status(401).send('Invalid email or password');
        }

        res.status(200).json({
            success: true,
            message: 'Login successful',
        });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};


module.exports.getDetails = async (req, res) => {
    try {
        const { email } = req.query; // Use req.query to get query parameters

        if (!email) {
            return res.status(400).json({ message: 'Email query parameter is required' });
        }

        // Find the customer by email
        const customer = await customerReg.findOne({ email });

        if (!customer) {
            return res.status(404).json({ message: 'Customer not found' });
        }

        // Respond with the customer details excluding sensitive information
        res.status(200).json({
            success: true,
            customer: {
                name: customer.name,
                dob: customer.dob,
                gender: customer.gender,
                phoneNumber: customer.phoneNumber,
                aadharNumber: customer.aadharNumber,
                village: customer.village,
                city: customer.city,
                district: customer.district,
                state: customer.state,
                postalcode: customer.postalcode,
                email: customer.email
            }
        });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};