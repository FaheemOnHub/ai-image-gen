import React from "react";

const FormField = ({
  LabelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSupriseMe,
  handleSupriseMe,
}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label
          htmlFor={name}
          className="block text-ls font-bold text-gray-900 "
        >
          {LabelName}
        </label>
        {isSupriseMe && (
          <button
            onClick={handleSupriseMe}
            className="text-[#2f80ed] text-sm font-medium m"
          >
            Surprise Me
          </button>
        )}
      </div>
      <input
        type="text"
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className="w-full bg-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] 
        focus:border-[#4649ff] border-transparent p-2 transition duration-300 ease-in-out"
      />
    </div>
  );
};

export default FormField;
