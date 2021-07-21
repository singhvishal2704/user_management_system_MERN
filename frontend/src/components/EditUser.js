import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Table
} from "react-bootstrap";
import axios from "axios";
import ModalContainer from "./ModalContainer";


const EditUser = () => {
  const [data, setData] = useState([]);
  const [state, setState] = useState({
      modalShow: false,
      value: 0
  })  
  useEffect(() => {
    axios.get("/api/users").then((response) => setData(response.data));
  }, [state]);
  
  return (
    <div style={{minHeight: '80vh'}}>
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
                        onClick={() => setState({modalShow: true, value: item._id})}
                        >
                        <i className="far fa-edit"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <ModalContainer show={state.modalShow} onHide={() => setState({modalShow: false})} user={state.value} />
            
            
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EditUser;

