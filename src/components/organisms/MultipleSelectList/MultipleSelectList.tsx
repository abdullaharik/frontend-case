import React, { useEffect, useState } from "react";
import type { Item, MultipleSelectListProps } from "./MultipleSelectList.types";

import "./MultipleSelectList.scss";

import { Search, Button, Header } from "../../atoms";
import {
  CheckboxList,
  CheckboxListItemType,
  makeCheckboxListItem,
} from "../../molecules";

export const MultipleSelectList: React.FC<MultipleSelectListProps> = (
  props
) => {
  const { list, buttonOnClick, labels } = props;

  const [searchValue, setSearchValue] = useState<string>("");
  const [selectableList, setSelectableList] = useState<CheckboxListItemType[]>(
    []
  );

  useEffect(() => {
    setSelectableList(list.map(makeCheckboxListItem));
  }, [list]);

  const filteredList = selectableList.filter(
    ({ value, checked }) =>
      value.toLocaleLowerCase().includes(searchValue) || checked
  );

  const handleSelect = (selected: Item) => {
    setSelectableList((prew) =>
      prew.map(({ value, checked }) => {
        if (value === selected) {
          return { value, checked: !checked };
        }
        return { value, checked };
      })
    );
  };

  const handleButtonOnClick = () => {
    const selectedList = selectableList
      .filter(({ checked }) => checked)
      .map(({ value }) => value);

    buttonOnClick(selectedList);
  };

  return (
    <div className="multiple-select-list">
      <Header tag="h3">{labels.title}</Header>
      <Search
        value={searchValue}
        setValue={setSearchValue}
        placeholder={labels.placeholder}
      />
      <CheckboxList list={filteredList} onClickItem={handleSelect} />
      <Button onClick={handleButtonOnClick}>{labels.button}</Button>
    </div>
  );
};
