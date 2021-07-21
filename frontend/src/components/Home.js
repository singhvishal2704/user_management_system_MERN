import React, {useState, useEffect} from "react";
import Users from "./Users";
import { Container, Row, Col, CardGroup } from "react-bootstrap";
import axios from 'axios'

const Home = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('/api/users')
        .then(response => setData(response.data));
  }, [])
  return (
    <>
      <Container style={{paddingTop: '10px'}}>
        <Row>
          <Col>
          <CardGroup style={{alignItems: 'center', justifyContent: 'center'}}>
            {data.map((item) => (
              <Users user={item}/>
            ))}
            
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
