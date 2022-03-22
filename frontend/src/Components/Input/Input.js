import React from "react";

function Input({ name, type, placeholder }) {
  return (
    <div className="my-4">
      <label className="block font-bold pb-2" style={{ fontSize: "12px" }}>
        {name}
      </label>
      <input
        className="p-4 border border-black opacity-50 rounded-md w-full"
        style={{ fontSize: "13px", letterSpacing: "-0.25px" }}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
