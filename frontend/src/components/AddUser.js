import React, { useState, useEffect } from "react";
import {
  Container,
  Form,
  Button,
  Row,
  Col,
  Table,
  Alert,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import axios from "axios";

const AddUser = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [success, setSuccess] = useState(false);
  const [status, setStatus] = useState('')

  useEffect(() => {
    axios.get("/api/users").then((response) => setData(response.data));
  }, [success, status]);

  const submitHandler = (e) => {
    e.preventDefault();
    const value = { name: name, email: email, phone: phone };
    axios.post("/api/users", value).then((response) => setSuccess(true));
  };

  const deleteHandler = async (id) => {
    await axios.delete(`/api/users/${id}`)
    .then(() => setStatus('Delete successful'));
  }

  return (
    <>
      <Container>
        <Container>
          <Row style={{ marginTop: "10px" }}>
            <Col md={{ span: 6, offset: 3 }}>
              {success ? (
                <Alert variant="success">Success! user data saved</Alert>
              ) : (
                <p></p>
              )}
              <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="name"
                    placeholder="Enter name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="phone"
                    placeholder="Phone"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  SAVE
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col md={{ span: 8, offset: 2 }} style={{ padding: "5%" }}>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th></th>
                    <th>User Id</th>
                    <th>Name</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{item._id}</td>
                      <td>{item.name}</td>
                      <td>
                        <LinkContainer to={`/user/${item._id}`}>
                          <button
                            type="button"
                            className="btn btn-secondary btn-sm"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="View"
                          >
                            <i className="far fa-eye"></i>
                          </button>
                        </LinkContainer>
                        <LinkContainer to="/edituser">
                          <button
                            type="button"
                            className="btn btn-secondary btn-sm"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Edit"
                          >
                            <i className="far fa-edit"></i>
                          </button>
                        </LinkContainer>
                        
                        <button
                          type="submit"
                          className="btn btn-secondary btn-sm"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Delete"
                          onClick={() => deleteHandler(item._id)}
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default AddUser;
