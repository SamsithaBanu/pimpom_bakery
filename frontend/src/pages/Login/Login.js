import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserAlt, FaRegEye, FaEyeSlash } from "react-icons/fa";
import { LoginScreenStyled } from "./LoginScreenStyled";
import SummaryApi from "../../common";
import { toast } from "react-toastify";
import Context from "../../context";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const {fetchUserDetails, fetchUserAddToCart, fetchUserWishlist} = useContext(Context);

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

    // Do something with the form data, for example:
    
    const dataResponse = await fetch(SummaryApi.singIn.url,{
      method: SummaryApi.singIn.method,
      credentials: 'include',
      headers:{
        "content-type":"application/json"
      },
      body: JSON.stringify(formData)
    });

    const dataApi = await dataResponse.json();

    if(dataApi.success){
      toast.success(dataApi.message);
      navigate("/");
      fetchUserDetails();
      fetchUserAddToCart();
      fetchUserWishlist();
    }
    
    if(dataApi.error){
      toast.error(dataApi.message)
    }
  };

  return (
    <LoginScreenStyled>
      <form className="container" onSubmit={handleSubmit}>
        <div className="userImg">
          <FaUserAlt size={35} />
        </div>
        <div className="heading">
          <h2>Login to your Account</h2>
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
            <label>Password</label>
            <Link to={"/forgotpassword"}>
              <p className="forgor">Forgot Password?</p>
            </Link>
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
          <button className="signInCta">Sign in</button>
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

export default Login;
