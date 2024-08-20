const FarmerProduct = require('../models/FarmerProdModel');
const FarmerRegistration = require('../models/FarmerRegModel');

// Add a product
module.exports.addProduct = async (req, res) => {
  try {
    const { prodid, prodname, quantity, type, price, cultivatedDate, expiryDate } = req.body;
    const { email } = req.query;
    console.log(email);
    const farmer = await FarmerRegistration.findOne({ email });

    if (!farmer) {
      return res.status(404).json({ message: "Farmer not found" });
    }

    const newProduct = new FarmerProduct({
      prodid,
      userId: farmer._id,
      prodname,
      quantity,
      type,
      price,
      cultivatedDate,
      expiryDate
    });

    const savedProduct = await newProduct.save();
    res.status(201).json({ message: "Product added successfully", product: savedProduct });
  } catch (error) {
    res.status(500).json({ message: "Failed to add product", error });
  }
};

// Delete a product
module.exports.deleteProduct = async (req, res) => {
  try {
    const { prodid } = req.query;

    const deletedProduct = await FarmerProduct.findOneAndDelete({ prodid });

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete product", error });
  }
};

// Update a product
module.exports.updateProduct = async (req, res) => {
  try {
    const { prodid } = req.query;
    const updates = req.body;

    const updatedProduct = await FarmerProduct.findOneAndUpdate({ prodid }, { $set: updates }, { new: true });

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
  } catch (error) {
    res.status(500).json({ message: "Failed to update product", error });
  }
};

// Display all products by userId
module.exports.getAllProductsByUser = async (req, res) => {
  try {
    const { userId } = req.query;

    const products = await FarmerProduct.find({ userId });

    if (products.length === 0) {
      return res.status(404).json({ message: "No products found for this user" });
    }

    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve products", error });
  }
};

// Display all unique types in the database
module.exports.getAllUniqueTypes = async (req, res) => {
  try {
    const types = await FarmerProduct.distinct('type');

    if (types.length === 0) {
      return res.status(404).json({ message: "No types found in the database" });
    }

    res.status(200).json({ types });
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve types", error });
  }
};
