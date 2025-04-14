import React, { useState } from "react";
import { FooterStyled } from "./FooterStyled";
import { IoCallOutline } from "react-icons/io5";
import { LuMessageCircle } from "react-icons/lu";
import ContactUs from "../ContactUs/ContactUs";

const Footer = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <FooterStyled>
      <div className="text">@2024 SamBakery All rights reserved</div>
      <div className="callWrapper">
        <div className="icon">
          <IoCallOutline size={20} color={'blue'} />
        </div>
        <a
          href="tel:+917540078553"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          +91 7540078553
        </a>
      </div>
      <div className="callWrapper">
        <div className="icon">
          <LuMessageCircle size={20} color={'blue'} />
        </div>
        <div className="call" onClick={toggleSidebar}>Contact Us</div>
      </div>
      <ContactUs isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </FooterStyled>
  );
};

export default Footer;
