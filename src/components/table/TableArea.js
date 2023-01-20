import React from "react";
import ProductRow from "./ProductRow";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import db from "../../firebase.config";
import { connect } from "react-redux";
import { InitItems, SetLoading, SetOpenItemView } from "../../redux/actions";
import { GetItems } from "../../redux/selectors";

const TableArea = ({ items, handleInitItems, handleLoading, handleSetOpenItemView }) => {
  const [selected, setSelected] = React.useState(undefined);

  React.useEffect(() => {
    const fetchItems = async () => {
      handleLoading(true);
      const itemsQ = query(collection(db, "items"), orderBy("code"));
      const itemsSnap = await getDocs(itemsQ);
      let tempItem = [];
      if (!itemsSnap.empty) {
        itemsSnap.forEach((doc) => {
          tempItem.push({ ...doc.data(), docID: doc.id });
        });
        handleInitItems(tempItem);
      }
      handleLoading(false);
    };

    fetchItems();
  }, []);

  const handleRowClick = (index) => {
    setSelected(index);
    handleSetOpenItemView(true, items[index]);
  };

  return (
    <div>
      {items?.length > 0 ? (
        items.map((x, index) => (
          <ProductRow key={index} index={index} item={x} selected={selected} onClick={() => handleRowClick(index)} />
        ))
      ) : (
        <div
          style={{
            height: "100vh",
            flexDirection: "column",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <h2>No Items yet</h2>
          <h5 className="m-3">Dont worry. Just start by creating one</h5>
        </div>
      )}
    </div>
  );
};
const mapStateToPros = (state) => ({
  items: GetItems(state),
});

const mapDispatchTopPros = (dispatch) => ({
  handleInitItems: (value) => dispatch(InitItems(value)),
  handleLoading: (value) => dispatch(SetLoading(value)),
  handleSetOpenItemView: (value, item) => dispatch(SetOpenItemView(value, item)),
});

export default connect(mapStateToPros, mapDispatchTopPros)(TableArea);
