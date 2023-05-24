import React from "react";
import { Container, Card } from "react-bootstrap";
import UserForm from "./userform";

const Home = () => {
  return (
    <>
      <Container>
        <Card className="mt-5 p-3 shadow border-0">
          <UserForm />
        </Card>
        <Card className="mt-5 p-3 shadow border-0"></Card>
      </Container>
    </>
  );
};

export default Home;
