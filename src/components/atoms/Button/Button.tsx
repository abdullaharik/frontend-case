import React from "react";

import type { ButtonProps } from "./Button.types";

import "./Button.scss";

export const Button: React.FC<ButtonProps> = (props) => {
  const { children, ...ButtonArgs } = props;

  return <button {...ButtonArgs}>{children}</button>;
};
