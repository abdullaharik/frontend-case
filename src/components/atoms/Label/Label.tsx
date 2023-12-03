import React from "react";

import type { LabelProps } from "./Label.types";

import "./Label.scss";

export const Label: React.FC<LabelProps> = (props) => {
  const { children, ...LabelArgs } = props;

  return <label {...LabelArgs}>{children}</label>;
};
