import React from "react";
import img from "../../../Images/image-product-xx991.jpg";
import imgtab from "../../../Images/image-product-suggestion-tablet.jpg";
import imgdesk from "../../../Images/image-product-suggestion-tablet.jpg";
import Button from "../../Button/Button";

function ProductDetailsFlex() {
  return (
    <div>
      <div className="md:flex md:items-center md:gap-12 xl:gap-32">
        <div>
          <img className="md:hidden lg:hidden" src={img} alt="img-speaker" />
          <img
            className="hidden md:block lg:hidden"
            src={imgtab}
            alt="img-speaker"
          />
          <img
            className="hidden md:hidden lg:block xl:w-50 xl:h-80 object-cover"
            style={{ width: "541px", height: "561px" }}
            src={imgdesk}
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
            New Product
          </p>
          <h1
            className="uppercase font-bold text-3xl xl:text-5xl"
            style={{ letterSpacing: "1px" }}
          >
            XX99 Mark I Headphones
          </h1>
          <p
            className=" opacity-50"
            style={{ fontSize: "15px", color: "black" }}
          >
            As the gold standard for headphones, the classic XX99 Mark I offers
            detailed and accurate audio reproduction for audiophiles, mixing
            engineers, and music aficionados alike in studios and on the go.
          </p>
          <p
            className="font-bold text-lg"
            style={{ letterSpacing: "1.28571px" }}
          >
            $ 1,750
          </p>
          <div className="flex items-center gap-5">
            <div className="flex justify-evenly items-center gap-4 bg-[#F1F1F1] w-32 px-3 py-3">
              <button>-</button>
              <p>0</p>
              <button>+</button>
            </div>
            <Button bgcolor="#D87D4A" color="white" name="Add to Cart" />
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
            <p className="mb-6">
              These headphones have been created from durable, high-quality
              materials tough enough to take anywhere. Its compact folding
              design fuses comfort and minimalist style making it perfect for
              travel. Flawless transmission is assured by the latest wireless
              technology engineered for audio synchronization with videos.
            </p>
            <p>
              More than a simple pair of headphones, this headset features a
              pair of built-in microphones for clear, hands-free calling when
              paired with a compatible smartphone. Controlling music and calls
              is also intuitive thanks to easy-access touch buttons on the
              earcups. Regardless of how you use the XX59 headphones, you can do
              so all day thanks to an impressive 30-hour battery life that can
              be rapidly recharged via USB-C.
            </p>
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
                Headphone Unit
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
                Headphone Unit
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
                Headphone Unit
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
                Headphone Unit
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsFlex;
