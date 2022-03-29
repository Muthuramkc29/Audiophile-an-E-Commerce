import React from "react";
import arrow from "../../../Images/icon-arrow-right.svg";
// import { Link } from "react-router-dom";

function NavMenu({ img, name, to }) {
  return (
    <div>
      <div
        className="rounded-md w-full md:w-52 lg:w-64 xl:w-80 lg:h-52 bg-[#F1F1F1] my-12 mx-auto py-5"
        // style={{ width: "325px" }}
      >
        <div className="flex flex-col justify-center items-center">
          <div>
            <img
              className="w-20 h-14 md:w-28 h-24"
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
            <a href={`${to}`}>
              <div className="flex justify-center gap-3">
                <p
                  className="uppercase"
                  style={{ fontSize: "13px", letterSpacing: "1px" }}
                >
                  Shop
                </p>
                <img className="img-fluid" src={arrow} alt="arrow" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavMenu;
