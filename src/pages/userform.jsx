import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const UserForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ispending, setIspending] = useState(false);
  const [validated, setValidated] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    const tableData = { email, password };
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setIspending(true);

    fetch("http://localhost:8000/tableData", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tableData),
    }).then(() => {
      setIspending(false);
      setValidated(true);
      // alert("Data Added Successfully!");
    });
  };

  const validateForm = () => {
    if (email.length == 0) {
      alert("Please Enter Your Emaill Address");
      return;
    }
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={submitForm}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* <Form.Control.Feedback type="invalid">
            Please add an Email.
          </Form.Control.Feedback> */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="secondary" type="submit" onClick={validateForm}>
          {ispending ? "Loading..." : "Submit"}
        </Button>
      </Form>
    </>
  );
};

export default UserForm;
