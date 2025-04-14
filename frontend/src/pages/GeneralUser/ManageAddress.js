import React, { useContext, useEffect, useState } from "react";
import { GeneralUserStyled } from "./GeneralUserStyled";
import address from "../../assests/profile/map (1).png";
import { IoAddSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { MdDelete, MdModeEdit } from "react-icons/md";
import SummaryApi from "../../common";
import { toast } from "react-toastify";
import Context from "../../context";

const ManageAddress = () => {
  const user = useSelector((state) => state?.user?.user);
  const [addressArray, setAddressArray] = useState();
  const { fetchUserDetails } = useContext(Context);

  useEffect(() => {
    if (user) {
      setAddressArray(user?.addresses);
    }
  }, [user, addressArray]);

  const deleteAddress = async (item) => {
    try {
      const url = SummaryApi?.deleteAddress?.url
        .replace(":userId", user?._id)
        .replace(":addressId", item?._id);

      const response = await fetch(url, {
        method: SummaryApi?.deleteAddress?.method,
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      console.log("data", data);

      if (data.success) {
        const updatedAddresses = addressArray.filter(
          (address) => address._id !== item._id
        );
        setAddressArray(updatedAddresses);
        toast.success("Address deleted successfully!");
        fetchUserDetails();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error deleting the address: ", error);
      toast.error("Failed to delete address. Please try again.");
    }
  };

  return (
    <GeneralUserStyled>
      <div className="addresswrapper">
        <div className="header">
          <div className="head">Manage Address</div>
          <div className="editProduct">
            <Link
              className="px-3 py-2 uploadProductBtn"
              to={"/general-user/add-address"}
            >
              Add New Address
            </Link>
            {/* <IoAddSharp color={"#9f2b68"} /> */}
          </div>
        </div>
        {addressArray?.length > 0 ? (
          <div className="addressWrapper">
            {addressArray?.map((item) => {
              return (
                <div className="addresswrap" key={item?._id}>
                  <div className="left">
                    <div className="name">{user?.name}</div>
                    <div className="addrss">
                      {item?.doorNo}, {item?.landmark}, {item?.address}
                    </div>
                  </div>
                  <div className="right">
                    <Link
                      to={`/general-user/edit-address/${user?._id}`}
                      state={{ address: item, fromCheckout: false }} // Pass state as a separate prop
                      className="edit"
                    >
                      <MdModeEdit size={22} />
                    </Link>

                    <div className="delete" onClick={() => deleteAddress(item)}>
                      <MdDelete size={22} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="body">
            <div className="image">
              <img src={address} />
            </div>
            <div className="title">Ohh No! Not yet add any Address!</div>
            <div className="subtitle">
              you can click on add new address and fill the address details!
            </div>
          </div>
        )}
      </div>
    </GeneralUserStyled>
  );
};

export default ManageAddress;
