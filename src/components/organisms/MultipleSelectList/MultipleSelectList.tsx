import React, { useState } from "react";
import type { Item, MultipleSelectListProps } from "./MultipleSelectList.types";

import { Input, Button, Label } from "../../atoms";
import { CheckboxList, CheckboxListItemType } from "../../molecules";

const makeUnique = (list: string[]) => [...new Set(list)];

export const MultipleSelectList: React.FC<MultipleSelectListProps> = (
  props
) => {
  const { list } = props;

  const [searchValue, setSearchValue] = useState<string>("");
  const [selectableList, setSelectableList] = React.useState<
    CheckboxListItemType[]
  >(() => makeUnique(list).map((item) => ({ value: item, checked: false })));

  const filteredList = selectableList.filter(({ value }) =>
    value.toLocaleLowerCase().includes(searchValue)
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

  const handleClickButton = () => {
    const selectedList = selectableList
      .filter(({ checked }) => checked)
      .map(({ value }) => value);
    console.log("Selected Items", selectedList);
  };

  return (
    <div>
      <Label>
        Ara: <Input value={searchValue} setValue={setSearchValue} />
      </Label>
      <CheckboxList list={filteredList} onClickItem={handleSelect} />
      <Button onClick={handleClickButton}>Ara</Button>
    </div>
  );
};
