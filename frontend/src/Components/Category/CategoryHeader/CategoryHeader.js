import React from "react";

function CategoryHeader({ category }) {
  return (
    <div>
      <div className="bg-[#000000] text-white h-28 mb-16 md:h-56 flex items-center justify-center">
        <h1
          className="uppercase font-bold text-2xl md:text-4xl"
          style={{ letterSpacing: "2px" }}
        >
          {category}
        </h1>
      </div>
    </div>
  );
}

export default CategoryHeader;
