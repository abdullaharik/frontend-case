export type Item = string;

export type SelectableItem = {
  item: Item;
  selected: boolean;
};

export type MultipleSelectListProps = {
  list: Item[];
  buttonOnClick: (selectedList: Item[]) => void;
  labels: {
    title: string;
    placeholder: string;
    button: string;
  };
};
