import React from "react";
import { useSelector } from "react-redux";
// import img from "../../Images/image-product.jpg";

function SummaryItem() {
  const cartProducts = useSelector((state) => state.user.cartProducts);
  console.log(cartProducts);
  return (
    <div>
      {cartProducts.map((product, index) => (
        <div key={index} className="my-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div>
              <img
                className="w-16 h-16 rounded-md object-fit"
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
                {product.price}
              </p>
            </div>
          </div>
          <div>
            <p className="mr-4">{product.count}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SummaryItem;
