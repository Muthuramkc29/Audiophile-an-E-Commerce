import React from "react";
import Button from "../../Button/Button";
import headphoneProd from "../../../Images/image-product.jpg";
import headphoneProdTablet from "../../../Images/image-product-tablet.jpg";
import headphoneProdDesktop from "../../../Images/image-product-desktop.jpg";

function CategoryFlex({
  position,
  imgMob,
  imgTab,
  imgDesktop,
  prodName,
  newProd,
}) {
  return (
    <div>
      {position === "left" ? (
        <div>
          <div className="my-24 px-6 md:px-12 xl:px-40">
            <div className="flex flex-col items-center justify-center gap-7 lg:flex-row lg:justify-between lg:items-center">
              <div>
                <img
                  className="rounded-md md:hidden lg:hidden"
                  src={imgMob}
                  alt="headphoneProd"
                />
                <img
                  className="rounded-md hidden md:block lg:hidden"
                  src={imgTab}
                  alt="headphoneProd"
                />
                <img
                  className="rounded-md hidden md:hidden lg:block"
                  style={{ width: "540px", height: "562px" }}
                  src={imgDesktop}
                  alt="headphoneProd"
                />
              </div>
              <div
                className="text-center lg:text-left flex flex-col gap-7"
                style={{ maxWidth: "445px" }}
              >
                <p
                  className="uppercase text-[#D87D4A] text-sm"
                  style={{ letterSpacing: "10px" }}
                >
                  {newProd === "true" ? "New Product" : ""}
                </p>
                <h1
                  className="uppercase font-bold"
                  style={{ letterSpacing: "1px", fontSize: "28px" }}
                >
                  {prodName}
                </h1>
                <p
                  className=" opacity-50"
                  style={{ fontSize: "15px", color: "black" }}
                >
                  The new XX99 Mark II headphones is the pinnacle of pristine
                  audio. It redefines your premium headphone experience by
                  reproducing the balanced depth and precision of studio-quality
                  sound.
                </p>
                <Button bgcolor="#D87D4A" color="white" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <div className="my-16 px-6 md:px-12 xl:px-40">
              <div className="flex flex-col-reverse items-center justify-center gap-7 lg:flex-row lg:justify-between lg:items-center">
                <div
                  className="text-center lg:text-left flex flex-col gap-7"
                  style={{ maxWidth: "445px" }}
                >
                  <p
                    className="uppercase text-[#D87D4A] text-sm"
                    style={{ letterSpacing: "10px" }}
                  >
                    {newProd === "true" ? "New Product" : ""}
                  </p>
                  <h1
                    className="uppercase font-bold"
                    style={{ letterSpacing: "1px", fontSize: "28px" }}
                  >
                    {prodName}
                  </h1>
                  <p
                    className=" opacity-50"
                    style={{ fontSize: "15px", color: "black" }}
                  >
                    The new XX99 Mark II headphones is the pinnacle of pristine
                    audio. It redefines your premium headphone experience by
                    reproducing the balanced depth and precision of
                    studio-quality sound.
                  </p>
                  <Button bgcolor="#D87D4A" color="white" />
                </div>
                <div>
                  <img
                    className="rounded-md md:hidden lg:hidden"
                    src={imgMob}
                    alt="headphoneProd"
                  />
                  <img
                    className="rounded-md hidden md:block lg:hidden"
                    src={imgTab}
                    alt="headphoneProd"
                  />
                  <img
                    className="rounded-md hidden md:hidden lg:block"
                    style={{ width: "540px", height: "562px" }}
                    src={imgDesktop}
                    alt="headphoneProd"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CategoryFlex;
