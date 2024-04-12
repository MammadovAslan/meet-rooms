"use client";

import { useState } from "react";

type InputProps = {
  placeholder?: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const Input = ({ placeholder, setValue, value }: InputProps) => {
  const [inputFocused, setInputFocused] = useState(false);

  return (
    <label className="relative">
      <input
        type="text"
        className="border-2 p-2 w-56 rounded-lg outline-none group focus:border-sky-500"
        onFocus={() => setInputFocused(true)}
        onBlur={() => setInputFocused(false)}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {placeholder && (
        <span
          className="absolute capitalize truncate  px-4 rounded-lg text-gray-400 transition bg-white pointer-events-none"
          style={{
            transform:
              inputFocused || value
                ? "translateX(-228px) translateY(-14px) scale(0.7)"
                : "translateX(-210px) translateY(8px)",
          }}
        >
          {placeholder}
        </span>
      )}
    </label>
  );
};

export default Input;
