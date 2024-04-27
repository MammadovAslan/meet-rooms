"use client";

import { useState } from "react";

type InputProps = {
  placeholder?: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  withCopyButton?: boolean;
};

const Input = ({ placeholder, setValue, value, withCopyButton }: InputProps) => {
  const [inputFocused, setInputFocused] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(value);
    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 3000);
  };

  return (
    <label className="relative flex gap-4">
      <input
        type="text"
        className="border border-gray-400 p-2 bg-transparent text-white w-full rounded-lg outline-none group focus:border-sky-500"
        onFocus={() => setInputFocused(true)}
        onBlur={() => setInputFocused(false)}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {placeholder && (
        <span
          className={`absolute capitalize truncate px-2 rounded-lg text-gray-300 transition  pointer-events-none ${
            inputFocused || value
              ? "bg-gradient-to-tl from-blue-400 via-cyan-900 to-blue-500 text-white font-bold opacity-85"
              : ""
          }`}
          style={{
            transform:
              inputFocused || value
                ? "translateX(-5px) translateY(-14px) scale(0.7)"
                : "translateX(10px) translateY(8px)",
          }}
        >
          {placeholder}
        </span>
      )}
      {value && withCopyButton && (
        <button
          onClick={handleCopyClick}
          className="px-2 py-1 bg-gradient-to-tr from-sky-600 from-0% via-blue-500 via-25% to-indigo-900 text-white rounded-lg"
        >
          Copy
        </button>
      )}
    </label>
  );
};

export default Input;
