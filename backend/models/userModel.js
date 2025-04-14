import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  address: { type: String, required: true },
  doorNo: { type: String, required: true },
  landmark: { type: String }
});

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    profilePic: String,
    password: { type: String, required: true },
    mobileNumber: { type: Number }, // Change from Number to String for better flexibility
    gender: String,
    dateOfBirth: { type: String }, // Ensure this is a string for date handling
    role: { type: String, default: "user" },
    addresses: [addressSchema],
  },
  { timestamps: true }
);

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
