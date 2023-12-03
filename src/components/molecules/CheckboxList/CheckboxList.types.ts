type CheckboxListItemValueType = string;

export type CheckboxListItemType = {
  value: CheckboxListItemValueType;
  checked: boolean;
};

export type CheckboxListProps = {
  list: CheckboxListItemType[];
  onClickItem: (value: CheckboxListItemValueType) => void;
};
