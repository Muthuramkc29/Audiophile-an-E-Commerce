import React from "react";

function Input({ name, type, placeholder }) {
  return (
    <div className="my-4 xl:my-0">
      <label className="block font-bold pb-2" style={{ fontSize: "12px" }}>
        {name}
      </label>
      <input
        className="p-4 border border-[#CFCFCF] outline-[#D87D4A] font-bold rounded-md w-full text-[#000000] lg:w-70 xl:w-80"
        style={{ fontSize: "13px", letterSpacing: "-0.25px" }}
        type={type}
        placeholder={placeholder}
        required
      />
    </div>
  );
}

export default Input;
