import React from "react";
import Button from "../../Button/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ScaleLoader from "react-spinners/ScaleLoader";
import "../../../index.css";

function CategoryFlex({ products }) {
  const loading = useSelector((state) => state.user.loading);
  console.log(products);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center mb-16 mt-24">
          <div className="flex flex-col justify-center items-center gap-4 mb-16">
            <p>Loading Products...</p>
            <ScaleLoader
              color={"#D87D4A"}
              // isLoading={isLoading}
              // css={override}
              size={150}
            />
            {/* <p>Please wait...</p> */}
          </div>
          {/* loading.... */}
        </div>
      ) : (
        <div>
          {products.map((product, index) =>
            index !== 1 ? (
              <div key={index}>
                <div className="my-24 container--mod mx-auto">
                  <div className="flex flex-col items-center justify-center gap-7 lg:flex-row lg:justify-between lg:items-center">
                    <div
                      data-aos="fade"
                      data-aos-duration="700"
                      data-aos-delay="100"
                    >
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
                          hover="hover:bg-[#fbaf85]"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div key={index}>
                <div>
                  <div className="my-16 container--mod mx-auto">
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
                            hover="hover:bg-[#fbaf85]"
                          />
                        </Link>
                      </div>
                      <div
                        data-aos="fade"
                        data-aos-duration="700"
                        data-aos-delay="100"
                      >
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
      )}
    </div>
  );
}

export default CategoryFlex;
