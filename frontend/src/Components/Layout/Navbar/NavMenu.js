import React from "react";
import arrow from "../../../Images/icon-arrow-right.svg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setNavMenu } from "../../../redux/reducers/userReducers";

function NavMenu({ img, name }) {
  const dispatch = useDispatch();

  return (
    <div>
      <Link
        to={`/${name}`}
        onClick={() => {
          dispatch(setNavMenu(false));
        }}
      >
        <div
          className="rounded-md w-full md:w-52 lg:w-64 xl:w-80 lg:h-52 bg-[#F1F1F1] my-12 mx-auto py-5"
          // style={{ width: "325px" }}
          data-aos="fade-down"
          data-aos-delay="200"
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
                style={{ fontSize: "17px" }}
              >
                {name}
              </p>

              <div className="flex justify-center items-center gap-2">
                <p
                  className="uppercase font-bold hover:text-[#D87D4A]"
                  style={{ fontSize: "13px", letterSpacing: "1px" }}
                >
                  Shop
                </p>
                <img
                  className="img-fluid"
                  style={{ width: "6px", height: "10px" }}
                  src={arrow}
                  alt="arrow"
                />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default NavMenu;
