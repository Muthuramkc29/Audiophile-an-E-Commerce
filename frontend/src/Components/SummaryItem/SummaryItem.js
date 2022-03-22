import React from "react";
import img from "../../Images/image-product.jpg";

function SummaryItem({ img, prodName, price, count }) {
  return (
    <div className="my-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <div>
          <img
            className="w-16 h-16 rounded-md object-fit"
            src={img}
            alt="img"
          />
        </div>
        <div>
          <p className="font-bold" style={{ fontSize: "15px" }}>
            {prodName}
          </p>
          <p
            className="font-bold text-black opacity-50"
            style={{ fontSize: "14px" }}
          >
            {price}
          </p>
        </div>
      </div>
      <div>
        <p className="mr-4">{count}</p>
      </div>
    </div>
  );
}

export default SummaryItem;
