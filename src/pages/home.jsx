import React from "react";
import { Container, Card } from "react-bootstrap";
import UserForm from "./userform";
import UserTable from "./usertable";

const Home = () => {
  return (
    <>
      <Container>
        <Card className="mt-5 p-3 shadow border-0">
          <UserForm />
        </Card>
        <Card className="mt-5 p-3 shadow border-0">
          <UserTable />
        </Card>
      </Container>
    </>
  );
};

export default Home;
