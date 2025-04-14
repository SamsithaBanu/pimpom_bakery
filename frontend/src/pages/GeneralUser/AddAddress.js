import React, { useContext, useState } from "react";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { GeneralUserStyled } from "./GeneralUserStyled";
import { useSelector } from "react-redux";
import SummaryApi from "../../common";
import { toast } from "react-toastify";
import Context from "../../context";
import { useNavigate } from "react-router-dom";

// Reverse geocoding function using Nominatim API
const getAddress = async (lat, lon, setAddress) => {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
    );
    const data = await response.json();
    setAddress(data.display_name); // Populate the address
  } catch (error) {
    console.error("Error fetching the address: ", error);
  }
};

// Component to handle map clicks
function LocationMarker({ setAddress }) {
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      getAddress(lat, lng, setAddress);
    }
  });
  return null;
}

// Main map component
const AddAddress = () => {
  const [address, setAddress] = useState("");
  const user = useSelector((state) => state?.user?.user);
  const { fetchUserDetails } = useContext(Context);
  const [formData, setFormData] = useState({
    address: "",
    doorNo: "",
    landmark: ""
  });
  const navigate = useNavigate();

  // Update formData when address is retrieved from map click
  const updateAddress = (newAddress) => {
    setAddress(newAddress);
    setFormData((prevData) => ({
      ...prevData,
      address: newAddress
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  console.log("user", user);

  const saveAddressDetails = async (e) => {
    e.preventDefault();
    const dataResponse = await fetch(
      SummaryApi?.addAddress?.url.replace(":userId", user?._id),
      {
        method: SummaryApi.addAddress.method,
        credentials: "include",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(formData)
      }
    );

    const dataApi = await dataResponse.json();

    console.log("data", dataApi);

    if (dataApi.success) {
      toast.success(dataApi.message);
      fetchUserDetails();
      setFormData({
        address: "",
        doorNo: "",
        landmark: ""
      });
      navigate("/general-user/manage-address");
    } else {
      toast.error(dataApi.message);
    }
  };

  return (
    <GeneralUserStyled>
      <div className="addAddressWrapper">
        <div className="header">
          <div className="head">Add Address</div>
        </div>
        <div className="mapContainer">
          <MapContainer
            style={{ height: "500px", width: "600px", marginTop: "20px" }}
            center={[11.1271, 78.6569]} // Center map to Tamil Nadu
            zoom={7} // Adjusted zoom level for a state-wide view
            scrollWheelZoom={true}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <LocationMarker setAddress={updateAddress} />
          </MapContainer>

          <div className="formWrapper">
            <form>
              <div className="address">
                <label>Retrieved Address</label>
                <textarea
                  className="addressInput"
                  value={formData?.address}
                  rows={3}
                  name="address"
                  onChange={handleInputChange}
                  style={{ width: "100%", padding: "8px", marginTop: "10px" }}
                />
              </div>
              <div className="address">
                <label>Door No</label>
                <input
                  className="addressInput"
                  type="text"
                  name="doorNo"
                  value={formData?.doorNo}
                  onChange={handleInputChange}
                />
              </div>
              <div className="address">
                <label>Landmark</label>
                <input
                  className="addressInput"
                  type="text"
                  name="landmark"
                  value={formData?.landmark}
                  onChange={handleInputChange}
                />
              </div>
              <div className="address">
                <label>User Name</label>
                <input className="addressInput" value={user?.name} readOnly />
              </div>
              <div className="editProduct">
                <button
                  className="px-3 py-2 uploadProductBtn"
                  onClick={(e) => saveAddressDetails(e)}
                >
                  Save Address Details
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </GeneralUserStyled>
  );
};

export default AddAddress;
