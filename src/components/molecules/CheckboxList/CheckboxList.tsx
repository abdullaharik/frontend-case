import React from "react";

import type { CheckboxListProps } from "./CheckboxList.types";
import { Label, Li, Checkbox, Ul } from "../../atoms";

import "./CheckboxList.scss";

export const CheckboxList: React.FC<CheckboxListProps> = (props) => {
  const { list, onClickItem } = props;

  return (
    <Ul>
      {/* SELECTED ITEMS */}
      {list
        .filter(({ checked }) => checked)
        .map(({ value, checked }) => {
          return (
            <Li key={value}>
              <Label>
                <Checkbox
                  checked={checked}
                  onClick={() => onClickItem(value)}
                />
                {value}
              </Label>
            </Li>
          );
        })}
      {/* UNSELECTED ITEMS */}
      {list
        .filter(({ checked }) => !checked)
        .map(({ value, checked }) => {
          return (
            <Li key={value}>
              <Label>
                <Checkbox
                  checked={checked}
                  onClick={() => onClickItem(value)}
                />
                {value}
              </Label>
            </Li>
          );
        })}
    </Ul>
  );
};