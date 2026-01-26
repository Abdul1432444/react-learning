import React from "react";

const Input = ({ lable, type, value, placeholder, onChangee }) => {
  return (
    <div className="flex flex-col gap-1">
      {/* for label;*/}
      <label className="text-sm font-medium text-gray-700">{lable}</label>
      {/* for input field
       */}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
};

export default Input;
