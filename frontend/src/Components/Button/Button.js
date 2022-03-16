import React from "react";

function Button({ bgcolor, color, border }) {
  return (
    <div>
      <button
        className={`bg-[${bgcolor}] text-${color} border border-black`}
        style={{ width: "160px", height: "48px" }}
      >
        See Product
      </button>
    </div>
  );
}

export default Button;
