import React from "react";

function CategoryHeader({ category }) {
  return (
    <div>
      <div
        className="bg-[#000000] text-white h-28 mb-16 md:h-56 flex items-center justify-center"
        data-aos="fade-down"
        data-aos-duration="500"
        data-aos-delay="100"
      >
        <h1
          className="uppercase font-bold text-2xl md:text-4xl"
          style={{ letterSpacing: "2px" }}
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-delay="300"
        >
          {category}
        </h1>
      </div>
    </div>
  );
}

export default CategoryHeader;
