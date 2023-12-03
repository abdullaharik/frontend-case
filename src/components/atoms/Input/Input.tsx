import React from "react";

import type { InputProps } from "./Input.types";

import "./Input.scss";

export const Input: React.FC<InputProps> = (props) => {
  const { value, setValue } = props;

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return <input type="text" value={value} onChange={handleOnChange} />;
};
