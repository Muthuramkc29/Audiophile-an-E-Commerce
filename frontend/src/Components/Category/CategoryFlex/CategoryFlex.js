import React from "react";
import Button from "../../Button/Button";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import headphoneProd from "../../../Images/image-product.jpg";
// import headphoneProdTablet from "../../../Images/image-product-tablet.jpg";
// import headphoneProdDesktop from "../../../Images/image-product-desktop.jpg";

function CategoryFlex({ products }) {
  // const products = useSelector((state) => state.user.products);
  console.log(products);

  return (
    <div>
      <div>
        {products.map((product, index) =>
          index !== 1 ? (
            <div key={index}>
              <div className="my-24 px-6 md:px-12 xl:px-40">
                <div className="flex flex-col items-center justify-center gap-7 lg:flex-row lg:justify-between lg:items-center">
                  <div>
                    <img
                      className="rounded-md md:hidden lg:hidden"
                      src={product.productMobile}
                      alt="headphoneProd"
                    />
                    <img
                      className="rounded-md hidden md:block lg:hidden"
                      src={product.productTablet}
                      alt="headphoneProd"
                    />
                    <img
                      className="rounded-md hidden md:hidden lg:block"
                      style={{ width: "540px", height: "562px" }}
                      src={product.productDesktop}
                      alt="headphoneProd"
                    />
                  </div>
                  <div
                    className="text-center lg:text-left flex flex-col gap-7"
                    style={{ maxWidth: "445px" }}
                  >
                    <p
                      className="uppercase text-[#D87D4A]"
                      style={{ letterSpacing: "10px", fontSize: "15px" }}
                    >
                      {product.newProduct ? "New Product" : ""}
                    </p>
                    <h1
                      className="uppercase font-bold text-3xl md:text-5xl"
                      style={{ letterSpacing: "1px" }}
                    >
                      {product.name}
                    </h1>
                    <p
                      className=" opacity-50"
                      style={{ fontSize: "15px", color: "black" }}
                    >
                      {product.description}
                    </p>
                    <Link to={`/${product.name.split(" ").join("")}`}>
                      <Button
                        bgcolor="#D87D4A"
                        color="white"
                        name="See Product"
                        hover="#fbaf85"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div key={index}>
              <div>
                <div className="my-16 px-6 md:px-12 xl:px-40">
                  <div className="flex flex-col-reverse items-center justify-center gap-7 lg:flex-row lg:justify-between lg:items-center">
                    <div
                      className="text-center lg:text-left flex flex-col gap-7"
                      style={{ maxWidth: "445px" }}
                    >
                      <p
                        className="uppercase text-[#D87D4A]"
                        style={{ letterSpacing: "10px", fontSize: "15px" }}
                      >
                        {product.newProd === "true" ? "New Product" : ""}
                      </p>
                      <h1
                        className="uppercase font-bold text-3xl md:text-5xl"
                        style={{ letterSpacing: "1px" }}
                      >
                        {product.name}
                      </h1>
                      <p
                        className=" opacity-50"
                        style={{ fontSize: "15px", color: "black" }}
                      >
                        {product.description}
                      </p>
                      <Link to={`/${product.name.split(" ").join("")}`}>
                        <Button
                          bgcolor="#D87D4A"
                          color="white"
                          name="See Product"
                          hover="#fbaf85"
                        />
                      </Link>
                    </div>
                    <div>
                      <img
                        className="rounded-md md:hidden lg:hidden"
                        src={product.productMobile}
                        alt="headphoneProd"
                      />
                      <img
                        className="rounded-md hidden md:block lg:hidden"
                        src={product.productTablet}
                        alt="headphoneProd"
                      />
                      <img
                        className="rounded-md hidden md:hidden lg:block"
                        style={{ width: "540px", height: "562px" }}
                        src={product.productDesktop}
                        alt="headphoneProd"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default CategoryFlex;
