import userModel from "../../models/userModel";

const editAddressController = async (req, res) => {
  const { userId, addressId } = req.params;
  const { address, doorNo, landmark } = req.body;

  try {
    const user = await userModel.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Find the address to edit in the array
    const addressToEdit = user.addresses.id(addressId);
    if (!addressToEdit)
      return res.status(404).json({ message: "Address not found" });

    // Update the address fields
    addressToEdit.address = address;
    addressToEdit.doorNo = doorNo;
    addressToEdit.landmark = landmark;

    await user.save();
    res.status(200).json({ message: "Address updated successfully",success: true, error: false, user });
  } catch (error) {
    res.status(500).json({ message: "Error updating address",success: false, error: true, error });
  }
};

module.exports = editAddressController;
