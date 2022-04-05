import React, { useEffect } from "react";
import Button from "../Button/Button";
import CartItem from "./CartItem";
// import mark2 from "../../Images/image-product-desktop.jpg";
import { useDispatch, useSelector } from "react-redux";
// import xx59 from "../../Images/image-product-xx59-desktop.jpg";
// import yx1 from "../../Images/image-product-earphone.jpg";
import { Link } from "react-router-dom";
import {
  setCartMenu,
  setCartProducts,
  setTotalAmount,
} from "../../redux/reducers/userReducers";

function CartMenu() {
  // const [count, setCount] = useState(0);
  // const [price, setPrice] = useState(4500);
  const cartProducts = useSelector((state) => state.user.cartProducts);
  // const summaryItems = useSelector((state) => state.user.summaryItems);
  const totalAmount = useSelector((state) => state.user.totalAmount);
  console.log(cartProducts);

  const dispatch = useDispatch();
  const setTotal = (price) => {
    dispatch(setTotalAmount(totalAmount + price));
  };

  useEffect(() => {
    dispatch(setTotalAmount(0));
  }, [dispatch]);

  return (
    <div className="w-full">
      <div className="py-6 px-4">
        <div className="bg-white flex justify-between items-center">
          <p>
            Cart <span></span>
          </p>
          <p
            className="text-black opacity-50 underline mt-1 cursor-pointer"
            style={{ fontSize: "14px" }}
            onClick={() => {
              dispatch(setCartProducts([]));
              dispatch(setTotalAmount(0));
            }}
          >
            Remove all
          </p>
        </div>

        {cartProducts.length === 0 && (
          <div
            className="py-12 text-black opacity-50 text-center"
            style={{ fontSize: "14px" }}
          >
            Currently! No items in the cart...
          </div>
        )}

        <div className="py-4">
          {cartProducts.map((product, index) => (
            <div key={index}>
              <CartItem
                product={product}
                setTotal={setTotal}
                // count={count}
                // setCount={setCount}
                // price={price}
                // setPrice={setPrice}
              />
            </div>
          ))}
          {/* <CartItem img={xx59} prodName="XX59" price="$ 899" />
          <CartItem img={yx1} prodName="YX1" price="$ 599" /> */}
        </div>

        <div className="flex justify-between pb-5 mx-1">
          <p
            className="font-bold uppercase text-black opacity-50"
            style={{ fontSize: "15px" }}
          >
            Total
          </p>
          <p>${totalAmount}</p>
        </div>
        {cartProducts.length === 0 ? (
          <div className="flex justify-center w-full">
            {/* <div> */}
            <Button
              bgcolor="#D87D4A"
              color="white"
              name="Checkout"
              disabled="true"
            />
            {/* </div> */}
          </div>
        ) : (
          <div className="flex justify-center w-full">
            <Link
              to="/checkout"
              onClick={() => {
                dispatch(setCartMenu(false));
                // dispatch(setSummaryItems([...summaryItems, {}]));
              }}
            >
              <Button bgcolor="#D87D4A" color="white" name="Checkout" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartMenu;
