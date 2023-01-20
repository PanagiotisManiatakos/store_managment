import React from "react";
import { Button, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { SetOpenItemView } from "../../redux/actions";
import { GetItemView } from "../../redux/selectors";
import FloatingLabelInput from "../ui/FloatingLabelInput";

const ModalViewItem = ({ state, setShow }) => {
  const [code, setCode] = React.useState("");
  const [name, setName] = React.useState("");
  const [shelf, setShelf] = React.useState("");
  const [place, setPlace] = React.useState("");
  const [balance, setBalance] = React.useState("");

  React.useEffect(() => {
    if (state.view) {
      setCode(state.item.code);
      setName(state.item.name);
      setPlace(state.item.place);
      setShelf(state.item.shelf);
      setBalance(state.item.balance);
    }
  }, [state.view]);

  return (
    <Modal centered show={state.view} backdrop="static" keyboard={false}>
      <Modal.Header>
        <Modal.Title className="d-flex justify-content-center align-items-center w-100 ">Ειδος</Modal.Title>
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
        <Button variant="secondary" onClick={() => setShow(false, state.item)}>
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
  setShow: (value, item) => dispatch(SetOpenItemView(value, item)),
});

export default connect(mapStateToProps, mapDispatchTopPros)(ModalViewItem);
