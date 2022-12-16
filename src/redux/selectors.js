export const GetItems = (state) => state.items;

export const GetLoading = (state) => state.ui.loading;

export const GetItemModalNew = (state) => state.ui.item.new;

export const GetItemView = (state) => ({
  view: state.ui.item.view,
  item: state.ui.item.current,
});
