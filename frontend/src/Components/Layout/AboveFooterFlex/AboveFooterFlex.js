import React from "react";
import imagebestgear from "../../../Images/image-best-gear.jpg";
import imagebestgeartab from "../../../Images/image-best-gear-tablet.jpg";
import imagebestgeardesktop from "../../../Images/image-best-gear-desktop.jpg";

function AboveFooterFlex() {
  return (
    <div>
      <div className="px-6 md:px-12 xl:px-40 my-28 md:my-24 lg:my-12 xl:my-32 flex flex-col lg:flex-row-reverse justify-center lg:justify-between items-center text-center lg:text-left gap-10">
        <div data-aos="flip-right" data-aos-duration="700" data-aos-delay="50">
          <img
            className="rounded-md md:hidden"
            src={imagebestgear}
            alt="imagebestgear"
          />
          <img
            src={imagebestgeartab}
            alt="imagebestgeartab"
            className="rounded-md hidden md:block lg:hidden"
          />
          <img
            src={imagebestgeardesktop}
            alt="imagebestgeartab"
            className="rounded-md hidden lg:block"
          />
        </div>
        <div className="lg:max-w-md">
          <h1
            className="mb-7 font-bold md:max-w-xl text-3xl md:text-4xl uppercase tracking-wider"
            data-aos="fade-right"
            data-aos-duration="700"
            data-aos-delay="200"
          >
            Bringing you the <span className="text-[#D87D4A]">best</span> audio
            gear
          </h1>
          <p
            className="md:max-w-xl"
            style={{ fontSize: "15px", color: "#000000", opacity: "50%" }}
            data-aos="fade-right"
            data-aos-duration="700"
            data-aos-delay="400"
          >
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboveFooterFlex;
