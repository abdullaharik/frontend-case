import React from "react";

import type { LiProps } from "./Li.types";

import "./Li.scss";

export const Li: React.FC<LiProps> = (props) => {
  const { children, ...LiArgs } = props;

  return <li {...LiArgs}>{children}</li>;
};
