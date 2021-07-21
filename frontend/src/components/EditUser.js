import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Modal,
  Button,
  Form,
} from "react-bootstrap";
import axios from "axios";

function MyVerticallyCenteredModal(props) {
  const [data, setData] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')


  useEffect(() => {
    axios.get(`/api/users/${props.item._id}`).then((response) => setData(response.data));
  }, []);

  const editHandler =  (e, id) => {
    e.preventDefault()
    const value = { name: 'React Hooks PUT Request Example' };
    axios.put(`/api/users/${id}`, value)
        .then(response => console.log(""));
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Edit User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" value={data.name} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" value={data.email} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="phone" value={data.phone} />
          </Form.Group>
          <Button variant="primary" type="submit">
            save
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const EditUser = () => {
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);

  useEffect(() => {
    axios.get("/api/users").then((response) => setData(response.data));
  }, []);

  
  return (
    <>
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }} style={{ padding: "5%" }}>
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
                    <td>{index+1}</td>
                    <td>{item._id}</td>
                    <td>{item.name}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-secondary btn-sm"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Edit"
                        onClick={() => setModalShow(true)}
                      >
                        <i className="far fa-edit"></i>
                      </button>
                      <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        item={item}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EditUser;
