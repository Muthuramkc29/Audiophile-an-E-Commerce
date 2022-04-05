import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  // setCartProducts,
  // setSummaryItems,
  setTotalAmount,
} from "../../redux/reducers/userReducers";
// import { useSelector } from "react-redux";

function CartItem({ product }) {
  const [count, setCount] = useState(0);
  const prodPrice = parseInt(product.productPrice.split(",").join(""));
  const [price, setPrice] = useState(prodPrice);
  // const summaryItems = useSelector((state) => state.user.summaryItems);
  // console.log(cartProducts);
  const dispatch = useDispatch();
  const totalAmount = useSelector((state) => state.user.totalAmount);

  useEffect(() => {
    setPrice(count === 0 ? prodPrice : prodPrice * count);
    // dispatch(setTotalAmount(count * prodPrice));
    // dispatch(
    //   setSummaryItems([
    //     ...summaryItems,
    //     {
    //       img: product.img,
    //       productName: product.productName,
    //       price: prodPrice,
    //     },
    //   ])
    // );
  }, [count, prodPrice]);

  return (
    <div>
      {/* {product.map((product, index) => ( */}
      {/* <div key={index}> */}
      <div className="flex justify-between items-center gap-5 py-2">
        <div className="flex justify-between items-center gap-3">
          <div>
            <img
              src={product.img}
              alt="item"
              className="rounded-md w-16 h-16 bg-[#F1F1F1] object-fit"
            />
          </div>
          <div>
            <p className="font-bold" style={{ fontSize: "15px" }}>
              {product.productName}
            </p>
            <p className="text-black opacity-50" style={{ fontSize: "13px" }}>
              {price}
            </p>
          </div>
        </div>
        <div className="flex justify-evenly items-center gap-4 bg-[#F1F1F1] px-3 py-1">
          <button
            onClick={() => {
              setCount((prevState) =>
                prevState === 0 ? prevState : prevState - 1
              );
              if (count !== 0) {
                dispatch(setTotalAmount(totalAmount - prodPrice));
              }
            }}
          >
            -
          </button>
          <p
          // onChange={(e) => {
          //   console.log(e);
          //   // setCount(e.target.value);
          // }}
          >
            {count}
          </p>
          <button
            onClick={() => {
              setCount((prevState) =>
                prevState === 8 ? prevState : prevState + 1
              );
              dispatch(setTotalAmount(totalAmount + prodPrice));
            }}
          >
            +
          </button>
        </div>
      </div>
      {/* </div> */}
      {/* // ))} */}
    </div>
  );
}

export default CartItem;
