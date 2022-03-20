import React from "react";

function CartItem({ img, prodName, price }) {
  return (
    <div>
      <div className="flex justify-between items-center gap-5 py-2">
        <div className="flex justify-between items-center gap-3">
          <div>
            <img
              src={img}
              alt="item"
              className="rounded-md w-16 h-16 bg-[#F1F1F1] object-fit"
            />
          </div>
          <div>
            <p className="font-bold" style={{ fontSize: "15px" }}>
              {prodName}
            </p>
            <p className="text-black opacity-50" style={{ fontSize: "13px" }}>
              {price}
            </p>
          </div>
        </div>
        <div className="flex justify-evenly items-center gap-4 bg-[#F1F1F1] px-3 py-1">
          <button>-</button>
          <p>0</p>
          <button>+</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
