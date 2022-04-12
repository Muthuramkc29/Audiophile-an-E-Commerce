import React from "react";

function Input({
  name,
  type,
  placeholder,
  register,
  formInputValue,
  errors,
  rules,
  // errorText,
  outline,
}) {
  console.log(errors);
  return (
    <div>
      <div className="my-4 xl:my-0">
        <label className="block font-bold pb-2" style={{ fontSize: "12px" }}>
          {name}
        </label>
        <input
          className={`p-4 border border-[#CFCFCF] ${outline} font-bold rounded-md w-full text-[#000000] lg:w-70 xl:w-80`}
          style={{ fontSize: "13px", letterSpacing: "-0.25px" }}
          type={type}
          placeholder={placeholder}
          {...register(formInputValue, rules)}
        />
      </div>
      {/* {errors && <p className="text-xs text-red-700 mt-1">{errorText}</p>} */}
    </div>
  );
}

export default Input;
