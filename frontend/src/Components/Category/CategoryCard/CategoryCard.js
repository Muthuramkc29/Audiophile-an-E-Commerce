import React from "react";
import arrow from "../../../Images/icon-arrow-right.svg";

function CategoryCard({ img, name }) {
  return (
    <div>
      <div
        className="rounded-md w-full md:w-52 lg:w-64 xl:w-80 lg:h-52 bg-[#F1F1F1] mt-16 mx-auto py-5"
        // style={{ width: "325px" }}
      >
        <div className="flex flex-col justify-center items-center">
          <div>
            <img
              className=""
              src={img}
              alt="headphone"
              style={{ width: "130px", height: "113px" }}
            />
          </div>
          <div className="text-center">
            <p
              className="uppercase font-bold mb-2"
              style={{ fontSize: "15px" }}
            >
              {name}
            </p>
            <div className="flex justify-center gap-3">
              <p
                className="uppercase"
                style={{ fontSize: "13px", letterSpacing: "1px" }}
              >
                Shop
              </p>
              <img className="img-fluid" src={arrow} alt="arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
