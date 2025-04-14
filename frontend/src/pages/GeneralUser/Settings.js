import React, { useState } from "react";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import { GeneralUserStyled } from "./GeneralUserStyled";
import { useSelector } from "react-redux";
import SummaryApi from "../../common";
import { toast } from "react-toastify";

const Settings = () => {
  const user = useSelector((state) => state.user.user); // Get user details from Redux
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: user?.email || "", // Pre-populate email if available
    password: "",
    newPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous error
    setSuccess(""); // Clear previous success

    // Check if new password and confirm password match
    if (formData.password !== formData.newPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      // Send request to the backend to update password
      const response = await fetch(SummaryApi?.changePassword?.url, {
        method: SummaryApi?.changePassword?.method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          newPassword: formData.newPassword,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Password changed successfully");
      } else {
        toast.error(result.message || "Something went wrong");
      }
    } catch (err) {
      toast.error("Failed to update password");
    }
  };

  return (
    <GeneralUserStyled>
      <div className="settingsWrapper">
        <div className="header">
          <div className="head">Settings Page</div>
        </div>
        <form className="container" onSubmit={handleSubmit}>
          <div className="heading">
            If you want to change the password, please enter the new one!
          </div>
          {error && <div className="error">{error}</div>}{" "}
          {/* Display error if any */}
          {success && <div className="success">{success}</div>}{" "}
          {/* Display success message */}
          <div className="email">
            <label>Email Address</label>
            <input
              className="inputemail"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              disabled // Disable email field as it should not be changed
            />
          </div>
          <div className="password">
            <div className="passwordHead">
              <label>New Password</label>
            </div>
            <div className="passwordInput">
              <input
                className="input"
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <div className="iconContainer">
                <span onClick={() => setShowPassword(!showPassword)}>
                  {!showPassword ? <FaEyeSlash /> : <FaRegEye />}
                </span>
              </div>
            </div>
          </div>
          <div className="password">
            <div className="passwordHead">
              <label>Confirm Password</label>
            </div>
            <div className="passwordInput">
              <input
                className="input"
                type={showNewPassword ? "text" : "password"}
                name="newPassword"
                value={formData.newPassword}
                onChange={handleInputChange}
                required
              />
              <div className="iconContainer">
                <span onClick={() => setShowNewPassword(!showNewPassword)}>
                  {!showNewPassword ? <FaEyeSlash /> : <FaRegEye />}
                </span>
              </div>
            </div>
          </div>
          <div className="signInCta">
            <button type="submit">Change Password</button>
          </div>
        </form>
      </div>
    </GeneralUserStyled>
  );
};

export default Settings;
