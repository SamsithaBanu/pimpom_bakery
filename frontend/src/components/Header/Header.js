import React, { useContext, useState } from "react";
import { HeaderScreenStyled } from "./HeaderScreenStyled";
import logo from "./Images/logo.png";
import logoImage from "../../assests/logo.webp";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SummaryApi from "../../common";
import { setUserDetails } from "../../store/userSlice";
import { toast } from "react-toastify";
import pastry from "../../assests/muffin1.jpg";
import pastrye from "../../assests/pastry.png";
import ssa from "../../assests/ssa.png";
import Context from "../../context";
import { TbDeviceMobileHeart } from "react-icons/tb";

const Header = () => {
  const user = useSelector((state) => state?.user?.user);
  const [menuDisplay, setMenuDisplay] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const context = useContext(Context);
  const searchInput = useLocation();
  const URLSearch = new URLSearchParams(searchInput?.search);
  const searchQuery = URLSearch.getAll("q");
  const [search, setSearch] = useState(searchQuery);
  const [placeholder, setPlaceholder] = useState("Enter Search..");

  const handleSearchClick = () => {
    // Perform your search logic here

    // Remove the placeholder text after the search is triggered
    setSearch("");
  };

  console.log("ser", searchInput);
  const handleLogout = async () => {
    const fetchData = await fetch(SummaryApi.logoutUser.url, {
      method: SummaryApi.logoutUser.method,
      credentials: "include",
    });

    const data = await fetchData.json();

    if (data.success) {
      toast.success(data.message);
      dispatch(setUserDetails(null));
      context.setWishlistRecipeCount(0);
      navigate("/");
    }

    if (data.error) {
      toast.error(data.message);
    }
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearch(value);

    if (value) {
      navigate(`/search?q=${value}`);
    } else {
      navigate("/search");
    }
  };

  return (
    // <HeaderScreenStyled className="h-24 shadow-md">
    //   <div className="h-full container mx-auto flex items-center px-4 justify-between headerTop">
    //     <div className="header">
    //       <Link to="/">
    //         <img src={samsi} width={100} height={100} alt={"logo"} style={{height:'50px'}}/>
    //       </Link>
    //     </div>
    //     <div className="flex items-center px-4 justify-between">
    //       <div className="px-4 text-l navs">Category</div>
    //       <div className="px-4 text-l navs">Contact</div>
    //       <div className="px-4 text-l navs">About</div>
    //     </div>
    //     <div className="flex items-center w-md h-10 justify-between border rounded-full ">
    //       <input
    //         type="text"
    //         placeholder="enter product here...."
    //         className="w-full style-none pl-4 bg-#f2f2f2"
    //         style={{background:'#f2f2f2',marginLeft:"10px"}}
    //       ></input>
    //       <div className="text-lg min-w-[50px] h-10 flex items-center justify-center rounded-r-full searchBg">
    //         <IoSearchSharp size={22} width="2em" height="2em" />
    //       </div>
    //     </div>
    //     <div className="flex items-center gap-7">
    //       <div className="relative group flex justify-center">
    //         {user?._id && (
    //           <div
    //             className="text-3xl cursor-pointer relative flex justify-center"
    //             onClick={() => setMenuDisplay((preve) => !preve)}
    //           >
    //               <FaRegCircleUser />
    //           </div>
    //         )}
    //         {console.log('dfa',menuDisplay && user?.role === 'ADMIN')}
    //         {menuDisplay && user?.role === 'ADMIN' && (
    //           <div className="relative bg-white bottom-0 top-11 h-fit p-2 shadow-lg rounded">
    //             <nav className="whitespace-nowrap hover:bg-slate-100 p-2">
    //               <Link to={"admin-panel"}>admin-panel</Link>
    //             </nav>
    //           </div>
    //         )}
    //       </div>

    //       <div className="text-2xl relative">
    //         <span>
    //           <FiShoppingCart size={25} />
    //         </span>
    //         <div className="flex items-center justify-between w-5 h-5 rounded-full p-1 text-white absolute -top-1 -right-3 textColor">
    //           <p className="text-xl">0</p>
    //         </div>
    //       </div>
    //       <div>
    //         {user?._id ? (
    //           <button onClick={handleLogout} className="">
    //             <div size={25}>Logout</div>
    //           </button>
    //         ) : (
    //           <Link to={"/login"} className="">
    //             <div size={25}>Login</div>
    //           </Link>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // </HeaderScreenStyled>
    <HeaderScreenStyled>
      <header className="header">
        <Link to="/" className="logo">
          {/* <img src={samsi} width={100} height={100} alt={"logo"} style={{height:'50px'}}/> */}
          <img
            src={ssa}
            alt="Bakery Logo"
            width={120}
            height={120}
            style={{ borderRadius: "8px" }}
          />
          <i>
            <h1>Sam Bakery</h1>
          </i>
        </Link>
        <nav className="nav">
          <ul>
            <li>
              <Link href="#category" to={"/product-listing"}>
                Category
              </Link>
            </li>
            <li>
              <a href="#aboutUs">About</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="header-right">
          <div className="search-bar">
            <input
              type="text"
              placeholder={placeholder}
              onChange={handleSearch}
              value={search}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearchClick();
                }
              }}
            />
            <button>Search</button>
          </div>
          {user?._id && (
            <div
              className="text-3xl cursor-pointer relative flex justify-center"
              onClick={() => setMenuDisplay((prev) => !prev)}
              style={{ margin: "0px 20px" }}
            >
              <FaRegCircleUser size={35} />
            </div>
          )}
          {menuDisplay && user?.role === "ADMIN" && (
            <div className="admin-panel">
              <nav>
                <Link to="admin-panel">Admin Panel</Link>
              </nav>
            </div>
          )}
          {menuDisplay && user?.role === "GENERAL" && (
            <div className="general-user">
              <nav>
                <Link to="general-user/my-profile">My Account</Link>
              </nav>
            </div>
          )}
          {user?._id && (
            <Link className="cart" to={"/cart"}>
              <FiShoppingCart size={28} />
              <span className="cart-count">{context?.cartProductCount}</span>
            </Link>
          )}
          {user?._id && (
            <Link className="cart" to={"/wishlist"}>
              <TbDeviceMobileHeart size={28} />
              <span className="cart-count">{context?.wishlistRecipeCount}</span>
            </Link>
          )}

          {user?._id ? (
            <button onClick={handleLogout} className="login-button">
              Logout
            </button>
          ) : (
            <Link to="/login" className="login-button">
              Login
            </Link>
          )}
        </div>
      </header>
    </HeaderScreenStyled>
  );
};

export default Header;
