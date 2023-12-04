import React from "react";

import type { SearchProps } from "./Search.types";

import { ReactComponent as SearchIcon } from "./Search.svg";

import "./Search.scss";

export const Search: React.FC<SearchProps> = (props) => {
  const { value, setValue, ...args } = props;

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="search">
      {/* We are not using type="search" because of SearchIcon and input cancel icons overlapping */}
      <input type="text" value={value} onChange={handleOnChange} {...args} />
      <SearchIcon />
    </div>
  );
};
