import db from "../../firebase.config";
import { addDoc, collection } from "firebase/firestore";
import React from "react";
import { Button, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { AddItem, SetLoading, SetOpenItemNew } from "../../redux/actions";
import FloatingLabelInput from "../ui/FloatingLabelInput";
import { GetItemModalNew } from "../../redux/selectors";

const ModalAddItem = ({ show, setShow, handleAdd, handleLoading }) => {
  const codeRef = React.useRef();
  const nameRef = React.useRef();
  const placeRef = React.useRef();
  const shelfRef = React.useRef();
  const balanceRef = React.useRef();
  const itemsRef = collection(db, "items");

  const handleSave = async () => {
    handleLoading(true);
    const item = {
      code: codeRef.current.value,
      name: nameRef.current.value,
      place: placeRef.current.value,
      shelf: shelfRef.current.value,
      balance: balanceRef.current.value,
    };

    try {
      const { id } = await addDoc(itemsRef, item);
      handleAdd({ ...item, docID: id });
      handleLoading(false);
      setShow(false);
    } catch (er) {
      console.log(er);
    }

    console.log(item);
  };
  return (
    <Modal centered show={show} onHide={() => setShow(false)} backdrop="static" keyboard={false}>
      <Modal.Header>
        <Modal.Title className="d-flex justify-content-center align-items-center w-100 ">Εισαγωγη είδους</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FloatingLabelInput type="text" placeholder="Κωδικός" ref={codeRef} />
        <FloatingLabelInput type="text" placeholder="Περιγραφή" ref={nameRef} />
        <FloatingLabelInput type="text" placeholder="Θέση" ref={placeRef} />
        <FloatingLabelInput type="text" placeholder="Ράφι" ref={shelfRef} />
        <FloatingLabelInput type="number" inputMode="decimal" placeholder="Υπόλοιπο" ref={balanceRef} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Ακύρωση
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Εισαγωγή
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  show: GetItemModalNew(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleAdd: (value) => dispatch(AddItem(value)),
  handleLoading: (value) => dispatch(SetLoading(value)),
  setShow: (value) => dispatch(SetOpenItemNew(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalAddItem);
