import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserAlt, FaRegEye, FaEyeSlash } from "react-icons/fa";
import { LoginScreenStyled } from "./LoginScreenStyled";
import { toast } from "react-toastify";
import SummaryApi from "../../common";
import Context from "../../context";

const ForgorPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    newPassword: ""
  });
  const navigate = useNavigate();
  const { fetchUserDetails, fetchUserAddToCart, fetchUserWishlist } =
    useContext(Context);

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: formData.email,
          newPassword: formData.newPassword
        })
      });

      const result = await response.json();
      console.log("resu", result);

      if (result.success) {
        toast.success("Password changed successfully");
        navigate("/login");
      } else {
        toast.error(result.message || "Something went wrong");
      }
    } catch (err) {
      toast.error("Failed to update password");
    }
  };

  return (
    <LoginScreenStyled>
      <form className="container" onSubmit={handleSubmit}>
        <div className="userImg">
          <FaUserAlt size={35} />
        </div>
        <div className="heading">
          <h2>Forgot Password</h2>
        </div>
        <div className="email">
          <label>Email Address</label>
          <input
            className="inputemail"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
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
                {showPassword ? <FaEyeSlash /> : <FaRegEye />}
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
                {showNewPassword ? <FaEyeSlash /> : <FaRegEye />}
              </span>
            </div>
          </div>
        </div>

        <div className="signInCta">
          <button type="submit">Sign in</button>
        </div>
        <div className="regis">
          Don't have an account?{" "}
          <Link className="registerCta" to={"/register"}>
            Register
          </Link>
        </div>
      </form>
    </LoginScreenStyled>
  );
};

export default ForgorPassword;
