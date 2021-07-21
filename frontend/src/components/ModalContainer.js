import React, {useEffect, useState} from 'react'
import {Modal, Button, Form, Alert} from 'react-bootstrap'
import axios from 'axios'



function ModalContainer(props) {

    const [data, setData] = useState('');
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [success, setSuccess] = useState(false);


  useEffect(() => {
    axios.get(`/api/users/${props.user}`).then((response) => setData(response.data));
    setData('')
    }, [props.user])
  

    const editHandler = (e) => {
        e.preventDefault();
        const values = { name: name,
        email: email,
        phone: phone
     };
    axios.put(`/api/users/${props.user}`, values)
        .then(response => setSuccess(true));
    }

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit User
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={editHandler}>
        {success ? (
                <Alert variant="success">Success! user data updated</Alert>
              ) : (
                <p></p>
              )}
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="name"
                    onChange={(e) => setName(e.target.value)}
                    defaultValue={data.name}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                    defaultValue={data.email}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="phone"
                    placeholder="Phone"
                    onChange={(e) => setPhone(e.target.value)}
                    defaultValue={data.phone}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  SAVE
                </Button>
              </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
}

export default ModalContainer;
