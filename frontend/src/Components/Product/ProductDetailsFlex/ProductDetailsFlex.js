import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { setCartProducts } from "../../../redux/reducers/userReducers";
// import img from "../../../Images/image-product-xx991.jpg";
// import imgtab from "../../../Images/image-product-suggestion-tablet.jpg";
// import imgdesk from "../../../Images/image-product-suggestion-tablet.jpg";
import Button from "../../Button/Button";

function ProductDetailsFlex({ product, render }) {
  const [added, setAdded] = useState(false);
  useEffect(() => {
    setAdded(false);
  }, [product.nameProduct]);
  // const product = useSelector((state) => state.user.individualProduct);
  const cartProducts = useSelector((state) => state.user.cartProducts);
  // const dispatch = useDispatch();
  const cartNameSplit = product.nameProduct.split(" ");
  const cartNameSlice = cartNameSplit
    .slice(0, cartNameSplit.length - 1)
    .join(" ");

  return (
    <div>
      {/* {products.map((product, index) => ( */}
      {/* <div key={index}> */}
      <div className="md:flex md:items-center md:gap-12 xl:gap-32">
        <div data-aos="fade" data-aos-duration="600" data-aos-delay="50">
          <img
            className="md:hidden lg:hidden"
            src={product.productImageMobile}
            alt="img-speaker"
          />
          <img
            className="hidden md:block lg:hidden"
            src={product.productImageTablet}
            alt="img-speaker"
          />
          <img
            className="hidden md:hidden lg:block xl:w-50 xl:h-80 object-cover"
            style={{ width: "541px", height: "561px" }}
            src={product.productImageDesktop}
            alt="img-speaker"
          />
        </div>
        <div
          className="text-left lg:text-left flex flex-col gap-7 md:gap-4 my-8"
          style={{ maxWidth: "460px" }}
        >
          <p
            className="uppercase text-[#D87D4A] text-sm"
            style={{ letterSpacing: "10px" }}
          >
            {product.newProduct ? "New Product" : ""}
          </p>
          <h1
            className="uppercase font-bold text-3xl xl:text-5xl"
            style={{ letterSpacing: "1px" }}
          >
            {product.nameProduct}
          </h1>
          <p
            className=" opacity-50"
            style={{ fontSize: "15px", color: "black" }}
          >
            {product.description}
          </p>
          <p
            className="font-bold text-lg"
            style={{ letterSpacing: "1.28571px" }}
          >
            $ {product.price}
          </p>
          <div className="flex items-center gap-5">
            {/* <div className="flex justify-evenly items-center gap-4 bg-[#F1F1F1] w-32 px-3 py-3">
              <button
                onClick={() => {
                  setCount((prevState) =>
                    prevState === 0 ? prevState : prevState - 1
                  );
                }}
              >
                -
              </button>
              <p>{count}</p>
              <button
                onClick={() => {
                  setCount((prevState) =>
                    prevState === 8 ? prevState : prevState + 1
                  );
                }}
              >
                +
              </button>
            </div> */}
            {!added || cartProducts.length === 0 ? (
              <div
                onClick={(e) => {
                  render(
                    product.productImageDesktop,
                    cartNameSlice,
                    product.price
                  );
                  setAdded(true);
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
              >
                <Button
                  bgcolor="#D87D4A"
                  color="white"
                  name="Add to Cart"
                  hover="hover:bg-[#fbaf85]"
                />
              </div>
            ) : (
              <div>
                <Button
                  bgcolor="#D87D4A"
                  color="white"
                  name="Added to Cart"
                  disabled="true"
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="lg:flex lg:gap-32 lg:items-start lg:justify-start">
        <div className="mt-20 mb-20 lg:w-2/4 ">
          <h1
            className="uppercase font-bold text-2xl"
            style={{ letterSpacing: "0.857143px" }}
          >
            Features
          </h1>
          <div className="my-6 text-black opacity-50">
            <p className="mb-6">{product.feature1}</p>
            <p>{product.feature2}</p>
          </div>
        </div>
        <div className="mb-20 lg:mt-20">
          <h1 className="uppercase font-bold text-2xl mb-4">In the Box</h1>
          <div className="mt-6">
            <div className="flex items-center my-1">
              <p
                className="text-[#D87D4A] font-bold"
                style={{ fontSize: "15px" }}
              >
                1x
              </p>
              <p
                className="ml-6 text-black opacity-50"
                style={{ fontSize: "15px" }}
              >
                {product.inTheBox1}
              </p>
            </div>
            <div className="flex items-center my-1">
              <p
                className="text-[#D87D4A] font-bold"
                style={{ fontSize: "15px" }}
              >
                2x
              </p>
              <p
                className="text-black opacity-50"
                style={{ marginLeft: "21px", fontSize: "15px" }}
              >
                {product.inTheBox2}
              </p>
            </div>
            <div className="flex items-center my-1">
              <p
                className="text-[#D87D4A] font-bold"
                style={{ fontSize: "15px" }}
              >
                1x
              </p>
              <p
                className="ml-6 text-black opacity-50"
                style={{ fontSize: "15px" }}
              >
                {product.inTheBox3}
              </p>
            </div>
            <div className="flex items-center my-1">
              <p
                className="text-[#D87D4A] font-bold"
                style={{ fontSize: "15px" }}
              >
                1x
              </p>
              <p
                className="ml-6 text-black opacity-50"
                style={{ fontSize: "15px" }}
              >
                {product.inTheBox4}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* ))} */}
    </div>
  );
}

export default ProductDetailsFlex;
