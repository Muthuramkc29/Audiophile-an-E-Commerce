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
          <div className="block lg:hidden">
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
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="hidden lg:block lg:mr-3">
            {/* <Link to="/"> */}
            <a
              className="font-normal p-2 mr-2"
              style={{ fontSize: "11px", letterSpacing: "2px" }}
              href="/"
            >
              HOME
            </a>
            {/* </Link> */}
            {/* <Link to="/headphones"> */}
            <a
              className="p-2 mr-2"
              href="/headphones"
              style={{ fontSize: "11px", letterSpacing: "2px" }}
            >
              HEADPHONES
            </a>
            {/* </Link> */}
            {/* <Link to="/speakers"> */}
            <a
              className="p-2 mr-2"
              href="/speakers"
              style={{ fontSize: "11px", letterSpacing: "2px" }}
            >
              SPEAKERS
            </a>
            {/* </Link> */}
            {/* <Link to="/earphones"> */}
            <a
              className="p-2 mr-3"
              href="/earphones"
              style={{ fontSize: "11px", letterSpacing: "2px" }}
            >
              EARPHONES
            </a>
            {/* </Link> */}
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