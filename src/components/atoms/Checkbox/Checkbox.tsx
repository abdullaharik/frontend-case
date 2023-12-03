import React from "react";

import type { CheckboxProps } from "./Checkbox.types";

import "./Checkbox.scss";

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  const { checked, onClick } = props;

  return <input type="checkbox" checked={checked} onClick={onClick} />;
};
