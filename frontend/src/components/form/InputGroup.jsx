import React from "react";
import Form from "react-bootstrap/Form";
const InputGroup = ({ label, type,name, placeholder, text, Ctrlid,onChangeHandler}) => {
  return (
    <Form.Group className="mb-3" controlId={Ctrlid}>
      <Form.Label>{label}</Form.Label>
      <Form.Control type={type} placeholder={placeholder} name={name} onChange={e => onChangeHandler(e)}/>
      <Form.Text className="text-muted">{text}</Form.Text>
    </Form.Group>
  );
};

export default InputGroup;
