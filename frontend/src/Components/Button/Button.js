import React from "react";

function Button({ bgcolor, color, hover, name, disabled, hoverColor }) {
  return (
    <div>
      <button
        // disabled={disabled}
        className={`bg-[${bgcolor}] text-${color} ${
          bgcolor === "#D87D4A" || bgcolor === "#000000"
            ? ""
            : "border border-black"
        } py-3 ${hover} ${hoverColor} ${
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
