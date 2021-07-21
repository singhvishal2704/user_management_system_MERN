import React from "react";
import { Card } from "react-bootstrap";

const Users = ({user}) => {
  return (
    <div>
      
      <Card
        border="primary"
        style={{ width: "fit-content" }}
        className="m-2"
      >

        <Card.Header>User Id: {user._id}</Card.Header>
        <Card.Body>
          <Card.Title> Profile </Card.Title>
          <Card.Text>
            <div>
                <p>Name: {user.name} <br /> Email: {user.email} <br /> Phone: {user.phone}</p>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Users;
