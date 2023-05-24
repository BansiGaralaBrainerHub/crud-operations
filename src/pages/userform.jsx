import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const UserForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ispending, setIspending] = useState(false);
  const submitForm = (e) => {
    e.preventDefault();
    const tableData = { email, password };
    setIspending(true);
    fetch("http://localhost:8000/tableData", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tableData),
    }).then(() => {
      setIspending(false);
      alert("Data Added Successfully!");
    });
  };
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="secondary" type="submit" onClick={submitForm}>
          {ispending ? "Loading..." : "Submit"}
        </Button>
      </Form>
      <Table striped className="mt-5">
        <thead>
          <tr>
            <th>#</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{/* {email} */}</td>
            <td>{/* {password} */}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default UserForm;
