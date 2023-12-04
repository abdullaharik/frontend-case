export type CheckboxListItemValueType = string;

export type CheckboxListItemType = {
  checked: boolean;
  value: CheckboxListItemValueType;
};

export type CheckboxListProps = {
  list: CheckboxListItemType[];
  onClickItem: (value: CheckboxListItemValueType) => void;
};
