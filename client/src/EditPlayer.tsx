import React from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import "./Home.css";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import Navigationbar from "./Navigationbar";

const initialFormValues = {
  first_name: "",
  last_initial: "",
  defense: 0,
  assists: 0,
  points: 0,
};

interface IinitialFormValues {
  first_name: string,
  last_initial: string,
  defense: number,
  assists: number,
  points: number,
  player_id: number,
}

export default function EditPlayer() {
  const navigate = useNavigate();
  const homeRoute = () => {
    navigate("/");
  };
  let params = useParams();
  const [formValues, setFormValues] = useState(initialFormValues);
  const getPlayerById = (id: number | string | undefined) => {
    axios
      .get(`http://localhost:9000/api/players/${id}`)
      .then((res) => {
        setFormValues(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    let id = params.id;
    console.log(params.id)
    getPlayerById(id);
  }, []);

  const handleSubmit = () => {
    const newTotal = {
      defense: formValues.defense,
      assists: formValues.assists,
      points: formValues.points,
    };
    console.log("newtotal" + newTotal);
    axios
      .put(`http://localhost:9000/api/players/${params.id}`, newTotal)
      .then((res: any) => {
        setFormValues(res.data);
        console.log(res.data);
      })

      .then((res) => {
        setFormValues(initialFormValues);
        homeRoute();
      })
      .catch((err) => console.log(err));
  };

  const onSubmit = (e: any) => {
    console.log(e)
    e.preventDefault();
    handleSubmit();
  };

  const updateForm = (name: string, value: string | number) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const onChange = (evt: any) => {
    const name = evt.target.name;
    const value = evt.target.value;
    updateForm(name, value);
  };

  const incrementPoints = () => {
    let update = {
      ...formValues,
      points: formValues.points + 1,
    };
    setFormValues(update);
  };
  const decrementPoints = () => {
    let update = {
      ...formValues,
      points: formValues.points - 1,
    };
    setFormValues(update);
  };
  const incrementDefense = () => {
    let update = {
      ...formValues,
      defense: formValues.defense + 1,
    };
    setFormValues(update);
  };
  const decrementDefense = () => {
    let update = {
      ...formValues,
      defense: formValues.defense - 1,
    };
    setFormValues(update);
  };
  const incrementAssists = () => {
    let update = {
      ...formValues,
      assists: formValues.assists + 1,
    };
    setFormValues(update);
  };
  const decrementAssists = () => {
    let update = {
      ...formValues,
      assists: formValues.assists - 1,
    };
    setFormValues(update);
  };

  return (
    <Container>
      <Navigationbar />
      <Row className="text-center">
        <Col className="mt-5">
          <Card className="mt-5">
            <Card.Body>
              <Card.Title>
                <h1>

                  {formValues.first_name} {formValues.last_initial}
                </h1>
              </Card.Title>
              <Card.Text>
                <div className="defense mt-3">
                  <h5 className="edit-stats">Defense: {formValues.defense}</h5>
                  <Button
                    className="btn-danger"
                    onClick={decrementDefense}
                    value={formValues.defense}
                    onChange={onChange}
                  >
                    -1
                  </Button>
                  <Button
                    className="btn-success ms-5"
                    onClick={incrementDefense}
                    value={formValues.defense}
                    onChange={onChange}
                  >
                    +1
                  </Button>
                </div>
                <div className="assists mt-5">
                  <h5 className="edit-stats">Assists: {formValues.assists}</h5>
                  <Button
                    className="btn-danger"
                    onClick={decrementAssists}
                    value={formValues.assists}
                    onChange={onChange}
                  >
                    -1
                  </Button>
                  <Button
                    className="btn-success ms-5"
                    onClick={incrementAssists}
                    value={formValues.assists}
                    onChange={onChange}
                  >
                    +1
                  </Button>
                </div>
                <div className="points mt-5">
                  <h5 className="edit-stats">Points: {formValues.points}</h5>
                  <Button
                    className="btn-danger"
                    onClick={decrementPoints}
                    value={formValues.points}
                    onChange={onChange}
                  >
                    -1
                  </Button>
                  <Button
                    className="btn-success ms-5"
                    onClick={incrementPoints}
                    value={formValues.points}
                    onChange={onChange}
                  >
                    +1
                  </Button>
                </div>
                <Button onClick={handleSubmit} className="btn-success mt-5">Submit</Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
