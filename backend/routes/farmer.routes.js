const express = require("express");
const router = express.Router();

const {
  createFarmer,
  signIn,
  getFarmerByEmail,
  updateFarmer,
  deleteFarmer,
} = require("../controller/farmerController");

router.post("/create", createFarmer);
router.post("/signin", signIn);
router.get("/email", getFarmerByEmail);
router.put("/update", updateFarmer);
router.delete("/delete", deleteFarmer);

module.exports = router;
