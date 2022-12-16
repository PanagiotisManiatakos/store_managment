import React from "react";
import { Button } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import { connect } from "react-redux";
import { SetOpenItemNew } from "../../redux/actions";

const FixedButtons = ({ setShowNew }) => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        right: 0,
        margin: 20,
        zIndex: 100,
      }}
    >
      <Button
        className="d-flex justify-content-center align-items-center"
        style={{ width: "5rem", height: "5rem", borderRadius: "50%" }}
        onClick={() => setShowNew(true)}
      >
        <AiOutlinePlus size="2.5rem" />
      </Button>
    </div>
  );
};

const mapDispatchTopPros = (dispatch) => ({
  setShowNew: (value) => dispatch(SetOpenItemNew(value)),
});

export default connect(null, mapDispatchTopPros)(FixedButtons);
