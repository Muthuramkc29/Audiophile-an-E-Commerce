import React from "react";
import logo from "../../../Images/logo.svg";
import fb from "../../../Images/icon-facebook.svg";
import insta from "../../../Images/icon-instagram.svg";
import twitter from "../../../Images/icon-twitter.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="bg-[#000000] text-[#FFFFFF] py-16">
        <div className="flex flex-col justify-center md:items-start items-center  container--mod mx-auto gap-10">
          <div className="flex flex-col lg:flex-row lg:w-full lg:justify-between items-center md:items-start gap-10">
            <div>
              <img src={logo} alt="logo" />
            </div>
            <div className="flex flex-col items-center gap-5 md:flex-row">
              <Link
                className="hover:text-[#D87D4A]"
                style={{ fontSize: "13px" }}
                to="/"
                onClick={() => {
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
              >
                {/* <a href="/"> */}
                HOME
                {/* </a> */}
              </Link>
              <Link
                className="hover:text-[#D87D4A]"
                style={{ fontSize: "13px" }}
                to="/headphones"
              >
                {/* <a style={{ fontSize: "13px" }} href="/"> */}
                HEADPHONES
                {/* </a> */}
              </Link>
              <Link
                className="hover:text-[#D87D4A]"
                style={{ fontSize: "13px" }}
                to="/speakers"
              >
                {/* <a style={{ fontSize: "13px" }} href="/"> */}
                SPEAKERS
                {/* </a> */}
              </Link>
              <Link
                className="hover:text-[#D87D4A]"
                style={{ fontSize: "13px" }}
                to="/earphones"
              >
                {/* <a style={{ fontSize: "13px" }} href="/"> */}
                EARPHONES
                {/* </a> */}
              </Link>
            </div>
          </div>
          <div className="text-center md:text-left">
            <p
              className="lg:max-w-xl"
              style={{ fontSize: "15px", color: "gray" }}
            >
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:w-full md:justify-between items-center gap-10">
            <div className="w-full md:w-full">
              {/* <p
                className="mt-1 text-center md:text-left"
                style={{ fontSize: "15px", color: "gray" }}
              >
                Challenge by{" "}
                <span className="mx-1 text-blue-700 underline mt-1 block mr-2 md:inline-block">
                  <a href="https://www.frontendmentor.io/challenges">
                    Frontend Mentor
                  </a>
                </span>
                Developed by{" "}
                <span className="mx-1 mr-2 text-blue-700 underline mt-2">
                  <a href="https://github.com/Muthuramkc29">Muthuram K C</a>
                </span>
              </p> */}
              <p
                className="text-center md:text-left font-bold mx-auto md:mx-0"
                style={{
                  fontSize: "15px",
                  color: "gray",
                  // width: "50%",
                  // maxWidth: "full",
                  // marginInline: "auto",
                }}
              >
                Challenge by
                <a href="https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx">
                  {" "}
                  <span className="inline">Frontend Mentor</span>
                </a>{" "}
                Coded by
                <a href="https://github.com/Muthuramkc29">
                  {" "}
                  <span className="inline">Muthuram K C</span>
                </a>
              </p>
            </div>
            <div className="flex gap-4">
              <img src={fb} alt="fb" />
              <img src={twitter} alt="twt" />
              <img src={insta} alt="insta" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
