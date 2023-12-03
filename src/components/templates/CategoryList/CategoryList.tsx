import React, { useEffect, useState } from "react";
import type { CategoryListProps } from "./CategoryList.types";

import { MultipleSelectList } from "../../organisms";

import { useListFetch } from "../../../hooks";
import { unique, decodeAmp } from "../../../utils";

const labels = {
  title: "Kategoriler",
  placeholder: "kategori ara...",
  button: "Ara",
};

export const CategoryList: React.FC<CategoryListProps> = (props) => {
  const { url } = props;

  const [list, setList] = useState<string[]>([]);
  const category = useListFetch(url);

  useEffect(() => {
    if (category.data?.length === 0) {
      return;
    }

    const decodedList = (category.data || []).map(decodeAmp) as string[];
    const uniqueList = unique(decodedList);
    setList(uniqueList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category.isRefetching, category.isLoading]);

  const handleButtonOnClick = (selected: string[]) => {
    console.log("Selected Items", selected);
  };

  return (
    <div>
      <MultipleSelectList
        list={list}
        buttonOnClick={handleButtonOnClick}
        labels={labels}
      />
    </div>
  );
};
