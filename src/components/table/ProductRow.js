import React from "react";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";
import SwipeToDelete from "react-swipe-to-delete-component";
import { DeleteItem, SetLoading } from "../../redux/actions";
import "react-swipe-to-delete-component/dist/swipe-to-delete.css";
import { deleteDoc, doc } from "firebase/firestore";
import db from "../../firebase.config";

const ProductRow = (props) => {
  const itemDBRef = doc(db, "items", props.item.docID);

  const handleDelete = async () => {
    props.handleLoading(true);
    try {
      await deleteDoc(itemDBRef);
      props.handleDelete(props.index);
    } catch (error) {
      console.log(error);
    }
    props.handleLoading(false);
  };

  return (
    <SwipeToDelete onDelete={handleDelete} classNameTag="px-2 py-1">
      <Card className={`${props.index === props.selected ? " selected-card" : ""}`} onClick={props.onClick}>
        <Card.Body>
          <div className="text-truncate px-1">{props.item.code}</div>
          <div className="text-truncate px-1">
            <b>{props.item.name}</b>
          </div>
          <div className="d-flex flex-row px-1">
            <div>Θεση</div>
            <div className="text-truncate ms-1">
              <b>{props.item.place}</b>
            </div>
          </div>
          <div className="d-flex flex-row px-1">
            <div>Υπόλοιπο</div>
            <div className="text-truncate ms-1">
              <b>{props.item.balance}</b>
            </div>
          </div>
        </Card.Body>
      </Card>
    </SwipeToDelete>
  );
};

const mapDispatchToProps = (dispatch) => ({
  handleLoading: (value) => dispatch(SetLoading(value)),
  handleDelete: (index) => dispatch(DeleteItem(index)),
});
export default connect(null, mapDispatchToProps)(ProductRow);
