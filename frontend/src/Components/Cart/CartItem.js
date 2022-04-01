import React from "react";
// import { useSelector } from "react-redux";

function CartItem({ product, count, setCount, price, setPrice }) {
  // const [count, setCount] = useState(0);
  // const [price, setPrice] = useState(
  //   parseInt(product.productPrice.split(",").join(""))
  // );
  // const cartProducts = useSelector((state) => state.user.cartProducts);
  // console.log(cartProducts);

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
            }}
          >
            -
          </button>
          <p
            onChange={(e) => {
              console.log(e.target.value);
              setPrice(price * e.target.value);
            }}
          >
            {count}
          </p>
          <button
            onClick={() => {
              setCount((prevState) =>
                prevState === 8 ? prevState : prevState + 1
              );
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
