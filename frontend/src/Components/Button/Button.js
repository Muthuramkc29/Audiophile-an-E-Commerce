import React from "react";

function Button({ bgcolor, color, border, name, disabled }) {
  return (
    <div>
      <button
        // disabled={disabled}
        className={`bg-[${bgcolor}] text-${color} border border-black py-3 ${
          disabled === "true" ? "pointer-events-none opacity-50" : ""
        }`}
        style={{ width: "160px" }}
      >
        {name}
      </button>
    </div>
  );
}

export default Button;
