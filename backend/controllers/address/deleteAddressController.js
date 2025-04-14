import userModel from "../../models/userModel";

const deleteAddressController = async (req, res) => {
  const { userId, addressId } = req.params;

  try {
    // Find the user by ID
    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Find the address to be deleted
    const addressToDelete = user.addresses.id(addressId);
    console.log("addres", addressToDelete);
    if (!addressToDelete) {
      return res.status(404).json({ message: "Address not found" });
    }

    // Remove the address
    user.addresses.pull(addressId);
    await user.save();

    // Return success response
    res.status(200).json({ message: "Address deleted successfully", success: true, error: false, user });
  } catch (error) {
    console.error("Error deleting address: ", error);
    res.status(500).json({ message: "Error deleting address", error: true, success: false, error });
  }
};

module.exports = deleteAddressController;
