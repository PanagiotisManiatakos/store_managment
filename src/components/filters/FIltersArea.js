import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const FIltersArea = () => {
  return (
    <Card className="m-2">
      <Card.Body>
        <Form>
          <Form.Control className="mb-2" placeholder="Κωδικός" />
          <Form.Control className="my-2" placeholder="Περιγραφή" />
          <Form.Control className="mτ-2" placeholder="Θέση" />
        </Form>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-center align-items-center">
        <Button>Αναζήτηση</Button>
      </Card.Footer>
    </Card>
  );
};

export default FIltersArea;
