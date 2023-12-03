import { CheckboxListItemType } from "./CheckboxList.types";

export const makeCheckboxListItem = (value: string): CheckboxListItemType => ({
  value,
  checked: false,
});
