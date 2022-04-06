import React from "react";
import logo from "../../../Images/logo.svg";
import cartIcon from "../../../Images/icon-cart.svg";
import { Link } from "react-router-dom";
import { setNavMenu, setCartMenu } from "../../../redux/reducers/userReducers";
import { useDispatch, useSelector } from "react-redux";

function Navbar() {
  const navMenu = useSelector((state) => state.user.navMenu);
  const cartMenu = useSelector((state) => state.user.cartMenu);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="bg-[#000000] text-[#FFFFFF] px-6 md:px-12 xl:px-40 p-7">
        <div className="flex justify-between items-center">
          <div className="block lg:hidden cursor-pointer">
            <i
              className="fa fa-bars"
              style={{ color: "white", fontSize: "28px" }}
              onClick={() => {
                navMenu
                  ? dispatch(setNavMenu(false))
                  : dispatch(setNavMenu(true));

                dispatch(setCartMenu(false));
              }}
            ></i>
          </div>
          <div>
            <Link to="/">
              <img
                onClick={() => {
                  dispatch(setNavMenu(false));
                }}
                src={logo}
                alt="logo"
              />
            </Link>
          </div>
          <div className="hidden lg:block lg:mr-3">
            <Link
              className="font-normal p-2 mr-2 hover:text-[#D87D4A]"
              style={{ fontSize: "11px", letterSpacing: "2px" }}
              to="/"
            >
              HOME
            </Link>
            <Link
              className="p-2 mr-2 hover:text-[#D87D4A]"
              to="/headphones"
              style={{ fontSize: "11px", letterSpacing: "2px" }}
            >
              HEADPHONES
            </Link>
            <Link
              className="p-2 mr-2 hover:text-[#D87D4A] "
              to="/speakers"
              style={{ fontSize: "11px", letterSpacing: "2px" }}
            >
              SPEAKERS
            </Link>
            <Link
              className="p-2 mr-3 hover:text-[#D87D4A]"
              to="/earphones"
              style={{ fontSize: "11px", letterSpacing: "2px" }}
            >
              EARPHONES
            </Link>
          </div>
          <div>
            <img
              className="cursor-pointer"
              onClick={() => {
                cartMenu
                  ? dispatch(setCartMenu(false))
                  : dispatch(setCartMenu(true));
                dispatch(setNavMenu(false));
              }}
              src={cartIcon}
              alt="cart-icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
