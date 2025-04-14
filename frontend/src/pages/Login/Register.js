//
import React, { useState } from "react";
import { FaEyeSlash, FaUserAlt, FaRegEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import SummaryApi from "../../common";
import { LoginScreenStyled } from "./LoginScreenStyled";
import imageTobase64 from "../../helpers/imagetobase";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
    profilePic: "",
  });
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (data.password === data.confirmPassword) {
      const dataResponse = await fetch(SummaryApi.singUp.url, {
        method: SummaryApi.singUp.method,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const dataApi = await dataResponse.json();

      if (dataApi.success) {
        toast.success(dataApi.message);
        navigate("/login");
      }

      if (dataApi.error) {
        toast.error(dataApi.message);
      }
    } else {
      toast.error("Please check password and confirm password");
    }
  };
  const handleUploadPic = async (e) => {
    const file = e.target.files[0];

    const imagePic = await imageTobase64(file);

    setData((preve) => {
      return {
        ...preve,
        profilePic: imagePic,
      };
    });
  };

  return (
    <LoginScreenStyled>
      <form className="container" onSubmit={handleSubmit}>
        <div className="image-upload">
          <div>
            Upload Photo
          </div>
          <input type="file" className="hidden" onChange={handleUploadPic} />
        </div>
        <div className="heading">
          <h2>Signup to your Account</h2>
        </div>
        <div className="email">
          <label>Username </label>
          <input
            type="text"
            placeholder="enter your name"
            name="name"
            value={data.name}
            onChange={handleOnChange}
            required
            className="inputemail"
          />
        </div>
        <div className="email">
          <label>Email</label>
          <input
            type="email"
            placeholder="enter email"
            name="email"
            value={data.email}
            onChange={handleOnChange}
            required
            className="inputemail"
          />
        </div>
        <div className="password">
          <div className="passwordHead">
            <label>Password</label>
          </div>
          <div className="passwordInput">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="enter password"
              value={data.password}
              name="password"
              onChange={handleOnChange}
              required
              className="input"
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
              type={showConfirmPassword ? "text" : "password"}
              placeholder="enter confirm password"
              value={data.confirmPassword}
              name="confirmPassword"
              onChange={handleOnChange}
              required
              className="input"
            />
            <div className="iconContainer">
              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaRegEye />}
              </span>
            </div>
          </div>
        </div>

        <button className="signInCta">Sign Up</button>
      </form>

      {/* <p className='my-5'>Already have account ? <Link to={"/login"} className=' text-red-600 hover:text-red-700 hover:underline'>Login</Link></p> */}
      <div className="regis">
        Already have account?{" "}
        <Link className="registerCta" to={"/login"}>
          Login
        </Link>
      </div>
    </LoginScreenStyled>
  );
};

export default SignUp;
