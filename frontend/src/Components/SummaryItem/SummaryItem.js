import React from "react";
import { useSelector } from "react-redux";
// import img from "../../Images/image-product.jpg";

function SummaryItem() {
  const cartProducts = useSelector((state) => state.user.cartProducts);
  const summaryProducts = JSON.parse(localStorage.getItem("cartProducts"));
  console.log(cartProducts);
  return (
    <div>
      {summaryProducts.map((product, index) => (
        <div key={index} className="my-4 flex justify-between items-center">
          <div className="flex items-center" style={{ maxWidth: "80%" }}>
            <div className=" mr-3" style={{ width: "64px" }}>
              <img
                style={{ width: "64px" }}
                className="w-full rounded-md object-fit"
                src={product.img}
                alt="img"
              />
            </div>
            <div>
              <p className="font-bold" style={{ fontSize: "15px" }}>
                {product.productName}
              </p>
              <p
                className="font-bold text-black opacity-50"
                style={{ fontSize: "14px" }}
              >
                {product.productPrice}
              </p>
            </div>
          </div>
          <div>
            <p className="mr-4">x{product.count}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SummaryItem;
