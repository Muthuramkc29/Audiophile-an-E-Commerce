import React from "react";

function Button({ bgcolor, color, border, name }) {
  return (
    <div>
      <button
        className={`bg-[${bgcolor}] text-${color} border border-black py-3`}
        style={{ width: "160px" }}
      >
        {name}
      </button>
    </div>
  );
}

export default Button;
