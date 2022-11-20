import React from "react";
import Form from "react-bootstrap/Form";
const InputGroup = ({ label, type, placeholder, text, Ctrlid }) => {
  return (
    <Form.Group className="mb-3" controlId={Ctrlid}>
      <Form.Label>{label}</Form.Label>
      <Form.Control type={type} placeholder={placeholder} />
      <Form.Text className="text-muted">{text}</Form.Text>
    </Form.Group>
  );
};

export default InputGroup;
