import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const UserTable = () => {
  const [tablelist, setTablelist] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/tableData")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTablelist(data);
      });
  }, []);
  return (
    <Table striped className="mt-5">
      <thead>
        <tr>
          <th>#</th>
          <th>Email</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
        {tablelist &&
          tablelist.map((tdata) => (
            <tr key={tdata.id}>
              <td>{tdata.id}</td>
              <td>{tdata.email}</td>
              <td>{tdata.password}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default UserTable;
