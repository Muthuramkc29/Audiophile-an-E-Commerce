import React from "react";

function Button({ bgcolor, color, border, name }) {
  return (
    <div>
      <button
        className={`bg-[${bgcolor}] text-${color} border border-black`}
        style={{ width: "160px", height: "48px" }}
      >
        {name}
      </button>
    </div>
  );
}

export default Button;
