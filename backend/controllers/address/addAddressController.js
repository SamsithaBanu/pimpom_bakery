const userModel = require("../../models/userModel");

const addAddressController = async (req, res) => {
  const { userId } = req.params;
  const { address, doorNo, landmark } = req.body;

  try {
    const user = await userModel.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Add the new address to the addresses array
    user.addresses.push({ address, doorNo, landmark });
    await user.save();

    res.status(200).json({ message: "Address added successfully", success: true,error: false, user });
  } catch (error) {
    res.status(500).json({ message: "Error adding address",success: false, error: true, error });
  }
};

module.exports = addAddressController;
