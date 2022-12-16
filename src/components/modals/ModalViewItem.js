import React from "react";
import { Button, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { SetOpenItemView } from "../../redux/actions";
import { GetItemView } from "../../redux/selectors";
import FloatingLabelInput from "../ui/FloatingLabelInput";

const ModalViewItem = ({ state, setShow }) => {
  const codeRef = React.useRef();
  const nameRef = React.useRef();
  const placeRef = React.useRef();
  const shelfRef = React.useRef();
  const balanceRef = React.useRef();

  React.useEffect(() => {
    if (state.view) {
      codeRef.current.value = state.item.code;
      nameRef.current.value = state.item.name;
      placeRef.current.value = state.item.place;
      shelfRef.current.value = state.item.shelf;
      balanceRef.current.value = state.item.balance;
    }
  }, [state.view]);
  return (
    <Modal centered show={state.view} onHide={() => setShow(false)} backdrop="static" keyboard={false}>
      <Modal.Header>
        <Modal.Title className="d-flex justify-content-center align-items-center w-100 ">Ειδος</Modal.Title>
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
        {/* <Button variant="primary" onClick={handleSave}>
          Εισαγωγή
        </Button> */}
      </Modal.Footer>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  state: GetItemView(state),
});

const mapDispatchTopPros = (dispatch) => ({
  setShow: (value) => dispatch(SetOpenItemView(value)),
});

export default connect(mapStateToProps, mapDispatchTopPros)(ModalViewItem);
