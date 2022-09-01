import { useState, useEffect } from "react";
import axios from "axios";
import Player from "./Player";
import "./Home.css";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { NavbarBrand } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsPeopleFill } from "react-icons/bs";
import { BsFillGearFill } from "react-icons/bs";
import { Card, CardGroup } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import Navigationbar from './Navigationbar';

function Home() {
  const [players, setPlayers] = useState([]);
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => setCounter(counter + 1);
  const decrementCounter = () => setCounter(counter - 1);

  const [counterOpposing, setCounterOpposing] = useState(0);
  const incrementCounterOpposing = () =>
    setCounterOpposing(counterOpposing + 1);
  const decrementCounterOpposing = () =>
    setCounterOpposing(counterOpposing - 1);

  const getAllPlayers = () => {
    axios
      .get(`http://localhost:9000/api/players`)
      .then((res) => {
        const allPlayers = res.data;
        // console.log(res.data);
        setPlayers(allPlayers);
      })
      .catch((err) => console.err(`ERROR: ${err}`));
  };

  useEffect(() => {
    getAllPlayers();
  }, []);
  return (
    <div>
      <Navigationbar />
      <Container>
        <Row xs={1} sm={1} md={1}>
          <Col className="mt-5">
            <CardGroup>
            <Card className="mt-5 text-center">
              <Card.Body>
                <Card.Title>Riverton Black </Card.Title>
                <Card.Text>
                  <h1 className="counter">{counter}</h1>
                  <Button variant="danger" onClick={decrementCounter}>
                    -1
                  </Button>
                  <Button
                    variant="success"
                    onClick={incrementCounter}
                    className="ms-5"
                  >
                    +1
                  </Button>
                </Card.Text>
              </Card.Body>
            </Card>
          {/* </Col> */}
          {/* <Col className="mt-5"> */}
            <Card className="mt-5 text-center xs-mt-1">
              <Card.Body>
                <Card.Title>Opposing Team</Card.Title>
                <Card.Text>
                  <h1 className="counter">{counterOpposing}</h1>
                  <Button
                    variant="danger"
                    className=""
                    onClick={decrementCounterOpposing}
                  >
                    -1
                  </Button>
                  <Button variant="success" onClick={incrementCounterOpposing}
                  className="ms-5">
                    +1
                  </Button>
                </Card.Text>
              </Card.Body>
            </Card>
                    </CardGroup>
          </Col>
        </Row>
        <Player allPlayers={players} />
      </Container>
    </div>
  );
}

export default Home;
