import db from "../../firebase.config";
import { addDoc, collection } from "firebase/firestore";
import React from "react";
import { Button, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { AddItem, SetLoading, SetOpenItemNew } from "../../redux/actions";
import FloatingLabelInput from "../ui/FloatingLabelInput";
import { GetItemModalNew } from "../../redux/selectors";

const ModalAddItem = ({ show, setShow, handleAdd, handleLoading }) => {
  const [code, setCode] = React.useState("");
  const [name, setName] = React.useState("");
  const [shelf, setShelf] = React.useState("");
  const [place, setPlace] = React.useState("");
  const [balance, setBalance] = React.useState("");
  const itemsRef = collection(db, "items");

  const handleSave = async () => {
    handleLoading(true);
    const item = {
      code,
      name,
      place,
      shelf,
      balance,
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

  React.useEffect(() => {
    if (!show) {
      setCode("");
      setName("");
      setShelf("");
      setPlace("");
      setBalance("");
    }
  }, [show]);

  return (
    <Modal centered show={show} onHide={() => setShow(false)} backdrop="static" keyboard={false}>
      <Modal.Header>
        <Modal.Title className="d-flex justify-content-center align-items-center w-100 ">Εισαγωγη είδους</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FloatingLabelInput type="text" placeholder="Κωδικός" value={code} setValue={setCode} />
        <FloatingLabelInput type="text" placeholder="Περιγραφή" value={name} setValue={setName} />
        <FloatingLabelInput type="text" placeholder="Θέση" value={place} setValue={setPlace} />
        <FloatingLabelInput type="text" placeholder="Ράφι" value={shelf} setValue={setShelf} />
        <FloatingLabelInput
          type="number"
          inputMode="decimal"
          placeholder="Υπόλοιπο"
          value={balance}
          setValue={setBalance}
        />
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
