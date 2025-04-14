import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { AiOutlineUser, AiOutlineInfoCircle } from "react-icons/ai";
import {
  MdOutlineBookmarkAdd,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { FiMapPin, FiShoppingCart } from "react-icons/fi";
import { LuShoppingBag } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { BiHelpCircle } from "react-icons/bi";
import { GeneralUserStyled } from "./GeneralUserStyled";

const GeneralUser = () => {
  const user = useSelector((state) => state?.user?.user);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <GeneralUserStyled>
      <div
        className="min-h-[calc(100vh-120px)] md:flex hidden"
        style={{ marginLeft: "120px", marginTop: "35px", borderRadius: "8px" }}
      >
        <aside
          className="bg-pink-100 min-h-full customShadow"
          style={{ borderRadius: "8px", width: "250px" }}
        >
          <div className="h-62 mt-6 flex justify-center items-center flex-col">
            <div className="text-5xl cursor-pointer relative flex justify-center">
              {user?.profilePic ? (
                <img
                  src={user?.profilePic}
                  className="w-20 h-20 rounded-full"
                  alt={user?.name}
                />
              ) : (
                <FaRegCircleUser />
              )}
            </div>
            <p className="capitalize text-lg font-semibold">{user?.name}</p>
            <p className="text-sm">{user?.role}</p>
          </div>

          {/***navigation */}
          <div>
            <nav className="grid p-4">
              <Link
                to={"my-profile"}
                className={`item px-2 py-1 ${
                  activeLink === "/my-profile" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("/my-profile")}
              >
                <div className="itemName">
                  <AiOutlineUser /> My Profile
                </div>
                <MdOutlineKeyboardArrowRight />
              </Link>

              <Link
                to={"manage-address"}
                className={`item px-2 py-1 ${
                  activeLink === "/manage-address" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("/manage-address")}
              >
                <div className="itemName">
                  <FiMapPin /> Manage Address
                </div>
                <MdOutlineKeyboardArrowRight />
              </Link>

              <Link
                to={"my-orders"}
                className={`item px-2 py-1 ${
                  activeLink === "/my-orders" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("/my-orders")}
              >
                <div className="itemName">
                  <LuShoppingBag /> My Orders
                </div>
                <MdOutlineKeyboardArrowRight />
              </Link>

              <Link
                to={"my-cart"}
                className={`item px-2 py-1 ${
                  activeLink === "/my-cart" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("/my-cart")}
              >
                <div className="itemName">
                  <FiShoppingCart /> My Cart
                </div>
                <MdOutlineKeyboardArrowRight />
              </Link>

              <Link
                to={"my-wishlist"}
                className={`item px-2 py-1 ${
                  activeLink === "/my-wishlist" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("/my-wishlist")}
              >
                <div className="itemName">
                  <MdOutlineBookmarkAdd /> My Wishlist
                </div>
                <MdOutlineKeyboardArrowRight />
              </Link>

              <Link
                to={"settings"}
                className={`item px-2 py-1 ${
                  activeLink === "/settings" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("/settings")}
              >
                <div className="itemName">
                  <IoSettingsOutline /> Settings
                </div>
                <MdOutlineKeyboardArrowRight />
              </Link>

              <Link
                to={"about-us"}
                className={`item px-2 py-1 ${
                  activeLink === "/about-us" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("/about-us")}
              >
                <div className="itemName">
                  <AiOutlineInfoCircle /> About Us
                </div>
                <MdOutlineKeyboardArrowRight />
              </Link>

              <Link
                to={"help"}
                className={`item px-2 py-1 ${
                  activeLink === "/help" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("/help")}
              >
                <div className="itemName">
                  <BiHelpCircle /> Help
                </div>
                <MdOutlineKeyboardArrowRight />
              </Link>
            </nav>
          </div>
        </aside>

        <main className="w-full h-full p-2 hwllo">
          <Outlet />
        </main>
      </div>
    </GeneralUserStyled>
  );
};

export default GeneralUser;
