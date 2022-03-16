import React from "react";
import logo from "../../../Images/logo.svg";
import cartIcon from "../../../Images/icon-cart.svg";

function Navbar() {
  return (
    <div>
      <div className="bg-[#000000] text-[#FFFFFF] px-6 md:px-12 xl:px-40 p-7">
        <div className="flex justify-between items-center">
          <div className="block lg:hidden">
            <i
              className="fa fa-bars"
              style={{ color: "white", fontSize: "28px" }}
            ></i>
          </div>
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className="text-xs hidden lg:block">
            <a className="p-2" href="/">
              HOME
            </a>
            <a className="p-2" href="/">
              HEADPHONES
            </a>
            <a className="p-2" href="/">
              SPEAKERS
            </a>
            <a className="p-2" href="/">
              EARPHONES
            </a>
          </div>
          <div>
            <img src={cartIcon} alt="cart-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
