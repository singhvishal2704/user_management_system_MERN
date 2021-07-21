import React, {useState, useEffect} from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";

import axios from 'axios'

const ViewUser = ({match}) => {
  const [data, setData] = useState('')

  useEffect(() => {
    axios.get(`/api/users/${match.params.id}`).then((response) => setData(response.data));
  }, [match])
  return (
    <div style={{minHeight: '80vh'}}>
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }} style={{ padding: "5%" }}>
            <Table striped bordered hover variant="primary">
              <tbody>
              <tr>
                  <td>UserId</td>
                  <td>{data._id}</td>
                </tr>
                <tr>
                  <td>Name</td>
                  <td>{data.name}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>{data.email}</td>
                </tr>
                <tr>
                  <td>Phone</td>
                  <td>{data.phone}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
        <Button href="\adduser" variant="primary">Back</Button>{' '}
      </Container>
    </div>
  );
};

export default ViewUser;
