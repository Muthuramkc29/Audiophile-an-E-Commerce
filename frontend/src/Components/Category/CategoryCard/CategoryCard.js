import React from "react";
import arrow from "../../../Images/icon-arrow-right.svg";
// import { Link } from "react-router-dom";

function CategoryCard({ img, name, to }) {
  return (
    <div>
      <div
        className="rounded-md w-full lg:h-52 bg-[#F1F1F1] my-16 mx-auto py-5"
        // style={{ width: "325px" }}
      >
        <div className="flex flex-col justify-center items-center">
          <div>
            <img
              className="w-32 h-28"
              src={img}
              alt="headphone"
              // style={{ width: "130px", height: "113px" }}
            />
          </div>
          <div className="text-center">
            <p
              className="uppercase font-bold mb-2"
              style={{ fontSize: "15px" }}
            >
              {name}
            </p>
            <a href={`${name}`}>
              <div className="flex justify-center items-center gap-3">
                <p
                  className="uppercase"
                  style={{ fontSize: "13px", letterSpacing: "1px" }}
                >
                  Shop
                </p>
                <img
                  className=""
                  style={{ width: "6px", height: "10px" }}
                  src={arrow}
                  alt="arrow"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
