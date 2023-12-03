export type Item = string;

export type SelectableItem = {
  item: Item;
  selected: boolean;
};

export type MultipleSelectListProps = {
  list: Item[];
  // selectedTaxonomyList: Taxonomy[];
  // setSelectedTaxonomyList: (taxonomyList: Taxonomy[]) => void;
};
