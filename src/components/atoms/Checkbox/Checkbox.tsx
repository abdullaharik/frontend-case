import React from "react";

import type { CheckboxProps } from "./Checkbox.types";

import "./Checkbox.scss";

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  const { checked, onChange, ...args } = props;

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={handleOnChange}
      {...args}
    />
  );
};
