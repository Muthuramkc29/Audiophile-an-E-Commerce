import React from "react";
import Button from "../Button/Button";
import CartItem from "./CartItem";
import mark2 from "../../Images/image-product-desktop.jpg";
import xx59 from "../../Images/image-product-xx59-desktop.jpg";
import yx1 from "../../Images/image-product-earphone.jpg";

function CartMenu() {
  return (
    <div className="w-full">
      <div className="py-6 px-4">
        <div className="bg-white flex justify-between items-center">
          <p>
            Cart <span>(3)</span>
          </p>
          <p
            className="text-black opacity-50 underline mt-1"
            style={{ fontSize: "14px" }}
          >
            Remove all
          </p>
        </div>

        <div
          className="py-12 text-black opacity-50 text-center hidden"
          style={{ fontSize: "14px" }}
        >
          Currently! No items in the cart...
        </div>

        <div className="py-4">
          <CartItem img={mark2} prodName="XX99 MK II" price="$ 2,999" />
          <CartItem img={xx59} prodName="XX59" price="$ 899" />
          <CartItem img={yx1} prodName="YX1" price="$ 599" />
        </div>

        <div className="flex justify-between pb-5 mx-1">
          <p
            className="font-bold uppercase text-black opacity-50"
            style={{ fontSize: "15px" }}
          >
            Total
          </p>
          <p>$0</p>
        </div>
        <div className="flex justify-center w-full">
          <a href="/checkout">
            <Button bgcolor="#D87D4A" color="white" name="Checkout" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default CartMenu;
