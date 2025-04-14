import userModel from "../models/userModel";
import bcrypt from "bcryptjs";

async function changePasswordController(req, res) {
  try {
    const { email, newPassword } = req.body;

    if (!email || !newPassword) {
      throw new Error("Email and new password are required");
    }

    // Find the user by email
    const user = await userModel.findOne({ email });
    if (!user) {
      throw new Error("User not found");
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update the user's password
    user.password = hashedPassword;
    await user.save();

    res.json({
      message: "Password updated successfully",
      success: true,
      error: false,
    });
  } catch (err) {
    res.json({
      message: err.message || "An error occurred",
      success: false,
      error: true,
    });
  }
}

module.exports = changePasswordController;
