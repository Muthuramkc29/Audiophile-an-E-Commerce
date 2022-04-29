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
  // setSummaryItems,
  setTotalAmount,
} from "../../redux/reducers/userReducers";

function CartMenu() {
  // const [count, setCount] = useState(0);
  // const [price, setPrice] = useState(4500);
  const cartProducts = useSelector((state) => state.user.cartProducts);
  // const summaryItems = useSelector((state) => state.user.summaryItems);
  const totalAmount = useSelector((state) => state.user.totalAmount);
  // console.log(cartProducts);

  const dispatch = useDispatch();

  const setTotalMount = () => {
    let sum = 0;
    for (let i = 0; i < cartProducts.length; i++) {
      let price = parseInt(cartProducts[i].productPrice.replace(/,/g, ""));
      let count = cartProducts[i].count;
      sum += count * price;
    }
    return sum;
  };

  const sum = setTotalMount();
  console.log(sum);

  useEffect(() => {
    dispatch(setTotalAmount(sum));
  }, [dispatch, sum]);

  useEffect(() => {
    window.localStorage.setItem("totalAmount", JSON.stringify(totalAmount));
  }, [totalAmount]);

  // useEffect(() => {
  //   window.localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  // }, [cartProducts]);

  const setSummaryProductsFn = (newProduct) => {
    dispatch(
      setCartProducts(
        cartProducts.map((item) => {
          return item.productName === newProduct.productName
            ? newProduct
            : item;
        })
      )
    );
    console.log(cartProducts);
  };

  const setCountLocal = (product, count) => {
    const oldCountObjs = JSON.parse(localStorage.getItem("cartProducts"));
    for (var i = 0; i < oldCountObjs.length; i++) {
      if (i.productName === product.productName) {
        //look for match with name
        i = { ...i, count: count }; //add two
        break; //exit loop since you found the person
      }
    }
    localStorage.setItem("cartProducts", JSON.stringify(oldCountObjs));
    console.log(cartProducts);
  };

  // useEffect(() => {
  //   const cartProductsLocal = JSON.parse(localStorage.getItem("cartProducts"));
  //   dispatch(setCartProducts(cartProductsLocal));
  // }, [dispatch]);

  return (
    <div className="w-full">
      <div className="py-6 px-4 xl:px-7">
        <div className="bg-white flex justify-between items-center">
          <p className="font-bold">
            Cart <span>({cartProducts.length})</span>
          </p>
          <div className="flex gap-2 items-center">
            <p
              className="text-black opacity-50 hover:text-[#D87D4A] hover:opacity-100 underline mt-1 cursor-pointer"
              style={{ fontSize: "14px" }}
              onClick={() => {
                dispatch(setCartProducts([]));
                dispatch(setTotalAmount(0));
              }}
            >
              Remove all
            </p>
            <p
              className="text-black opacity-50 text-center mt-4 mb-3 cursor-pointer hover:text-[#D87D4A] hover:opacity-100 underline"
              onClick={() => {
                dispatch(setCartMenu(false));
              }}
              style={{ fontSize: "14px" }}
            >
              Close
            </p>
          </div>
        </div>

        {cartProducts.length === 0 && (
          <div
            className="py-12 text-black opacity-50 text-center"
            style={{ fontSize: "14px" }}
          >
            Currently! No items in the cart...
          </div>
        )}

        <div className="py-4 overflow-y-auto max-h-96 px-2">
          {cartProducts.map((product, index) => (
            <div key={index}>
              <CartItem
                product={product}
                setSummaryProductsFn={setSummaryProductsFn}
                setCountLocal={setCountLocal}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-between pb-6 pt-3 mx-4">
          <p
            className="font-bold uppercase text-black opacity-50"
            style={{ fontSize: "15px", marginTop: "2px" }}
          >
            Total
          </p>
          <p
            className="text-lg font-bold uppercase"
            // style={{ letterSpacing: "0.32345px" }}
          >
            $ {totalAmount.toLocaleString()}
          </p>
        </div>
        {cartProducts.length === 0 || totalAmount === 0 ? (
          <div className="flex justify-center w-full">
            {/* <div> */}
            <Button
              bgcolor="#000000"
              color="white"
              name="No items added"
              hover="hover:bg-[#000000]"
            />
            {/* </div> */}
          </div>
        ) : (
          <div className="flex justify-center w-full">
            <Link
              to="/checkout"
              onClick={() => {
                dispatch(setCartMenu(false));
              }}
            >
              <Button
                bgcolor="#D87D4A"
                color="white"
                name="Checkout"
                hover="hover:bg-[#fbaf85]"
              />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartMenu;
