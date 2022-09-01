import { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { Container, Row, Col, Card } from "react-bootstrap";

const initialCounterValues = {
  defense: 0,
  assists: 0,
  points: 0,
};

const Players = (props) => {
  //   const [players, setPlayers] = useState([])
  return (
    <div className="box">
      <br></br>
      <Row xs={2} md={4}>
        {props.allPlayers.map((player) => {
          return (
            <Col className="box-container" key={player.player_id}>
              <Link
                to={`/${player.player_id}`}
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                  <Card className="mb-3">
                    <Card.Body>
                      <Card.Title>
                        <h3 className="player-name">
                          {player.first_name} {player.last_initial}
                        </h3>
                      </Card.Title>
                      <Card.Text>
                        D's: {player.defense}
                        <br />
                        Assists: {player.assists}
                        <br />
                        Points: {player.points}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                {/* <Link to={`edit/${prayer.prayer_id}`}>
              <button>Edit</button>
              </Link>
              <Link to={`delete/${prayer.prayer_id}`}>
              <button onClick={() => setOpenModal(true)}>Delete</button>
              {openModal && <DeletePrayerModal closeModal={setOpenModal} id={prayer.prayer_id}/>} 
            </Link> */}
                {/* <button>Delete</button> */}
                {/* {/* onClick={editPrayerRoute} */}
              </Link>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Players;
