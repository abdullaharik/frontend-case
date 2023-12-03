import React from "react";

import type { HeaderProps } from "./Header.types";

import "./Header.scss";

export const Header: React.FC<HeaderProps> = (props) => {
  const { tag, children, ...HeaderArgs } = props;

  return React.createElement(tag || "h3", { ...HeaderArgs }, children);
};
