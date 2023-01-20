const items = (state = [], action) => {
  switch (action.type) {
    case "items/INIT":
      return action.value;
    case "items/ADD":
      return [action.value, ...state];
    case "items/DELETE":
      console.log(state);
      const tempArray = new Array(...state);
      console.log(tempArray);
      tempArray.splice(action.index, 1);
      console.log(tempArray);
      return tempArray;
    default:
      return state;
  }
};

const ui = (state = { loading: false, item: { new: false, view: false, current: {} } }, action) => {
  switch (action.type) {
    case "ui/loader/SET":
      return { ...state, loading: action.value };
    case "ui/item/new/SET":
      return { ...state, item: { ...state.item, new: action.value } };
    case "ui/item/new/VIEW":
      return { ...state, item: { ...state.item, view: action.value, current: action.item } };
    default:
      return state;
  }
};

export const reducer = (state = {}, action) => ({
  items: items(state.items, action),
  ui: ui(state.ui, action),
});
