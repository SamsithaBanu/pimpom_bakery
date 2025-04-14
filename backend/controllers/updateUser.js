import userModel from "../models/userModel";

async function updateUser(req, res) {
  try {
    const sessionUser = req.userId;
    console.log("ses", sessionUser);

    // Destructure the incoming data from the request
    const { dateOfBirth, mobileNumber, gender, name, email, role, profilePic } =
      req.body;

    // Construct the payload
    const payload = {
      ...(dateOfBirth && { dateOfBirth }),
      ...(mobileNumber && { mobileNumber }),
      ...(gender && { gender }),
      ...(name && { name }),
      ...(email && { email }),
      ...(role && { role }),
      ...(profilePic && { profilePic }),
    };

    // Find the user and update it
    const updatedUser = await userModel.findByIdAndUpdate(
      sessionUser,
      payload,
      {
        new: true, // Ensure the updated document is returned
      }
    );

    if (!updatedUser) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }

    // Log the updated user
    console.log("upda", updatedUser);

    // Send back the updated user data
    res.json({
      data: updatedUser,
      message: "User updated successfully",
      success: true,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || "Error updating user",
      success: false,
    });
  }
}

module.exports = updateUser;
