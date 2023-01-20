export const InitItems = (value) => ({
  type: "items/INIT",
  value,
});

export const AddItem = (value) => ({
  type: "items/ADD",
  value,
});

export const DeleteItem = (index) => ({
  type: "items/DELETE",
  index,
});

export const SetLoading = (value) => ({
  type: "ui/loader/SET",
  value,
});

export const SetOpenItemNew = (value) => ({
  type: "ui/item/new/SET",
  value,
});

export const SetOpenItemView = (value, item) => ({
  type: "ui/item/new/VIEW",
  value,
  item,
});
