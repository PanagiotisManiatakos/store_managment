import React from "react";
import { FloatingLabel, Form, InputGroup } from "react-bootstrap";
import { TiDeleteOutline } from "react-icons/ti";

const FloatingLabelInput = React.forwardRef((props, ref) => {
  return (
    <InputGroup className="crm-floating-with-icon" props={props}>
      <FloatingLabel label={props.placeholder}>
        <Form.Control
          className="crm-input ps-1"
          value={props.value}
          ref={ref}
          onChange={(e) => props.setValue(e.target.value)}
          type={props.type}
          inputMode={props.inputMode}
          placeholder={props.placeholder}
        />
      </FloatingLabel>
      {props.value !== "" && (
        <div className="d-flex align-items-center justify-content-center" onClick={() => props.setValue("")}>
          <TiDeleteOutline size="1.75rem" />
        </div>
      )}
    </InputGroup>
  );
});

export default FloatingLabelInput;
