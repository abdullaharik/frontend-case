import React from "react";

import type { UlProps } from "./Ul.types";

import "./Ul.scss";

export const Ul: React.FC<UlProps> = (props) => {
  const { children, ...UlArgs } = props;

  return <ul {...UlArgs}>{children}</ul>;
};
