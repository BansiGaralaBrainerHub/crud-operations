import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  const [name, setName] = useState("");
  const handleclick = () => {
    setName(!name);
  };
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Form</Nav.Link>
            <Nav.Link href="#pricing">Table</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link onClick={handleclick}>
              {name ? "Log out" : " Login"}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
