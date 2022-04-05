import React from "react";
import Button from "../../Button/Button";

function SuggestionCard({ img, prodName, imgTab }) {
  return (
    <div>
      <div className="mb-12 flex flex-col justify-center items-center gap-7 text-center">
        <div>
          <img
            className="rounded-md w-full md:hidden lg:hidden"
            src={img}
            alt={prodName}
          />
          <img
            className="rounded-md w-full hidden md:block w-72 lg:w-96 lg:h-96 object-cover"
            src={imgTab}
            alt={prodName}
          />
        </div>
        <div>
          <h1
            className="uppercase font-bold text-2xl md:text-xl mb-4"
            style={{ letterSpacing: "1.71429px" }}
          >
            {prodName}
          </h1>
          <Button
            bgcolor="#D87D4A"
            color="white"
            name="See Product"
            hover="hover:bg-[#fbaf85]"
          />
        </div>
      </div>
    </div>
  );
}

export default SuggestionCard;
