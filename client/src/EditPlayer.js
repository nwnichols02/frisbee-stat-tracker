import React from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import "./Home.css";

const initialFormValues = {
  first_name: "",
  last_initial: "",
  defense: 0,
  assists: 0,
  points: 0,
};

export default function EditPlayer(props) {
  const navigate = useNavigate();
  const homeRoute = () => {
    navigate("/");
  };
  let params = useParams();
  const [formValues, setFormValues] = useState(initialFormValues);
  const getPlayerById = (id) => {
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
      .then((res) => {
        setFormValues([res.data]);
        console.log(res.data);
      })

      .then((res) => {
        setFormValues(initialFormValues);
        homeRoute();
      })
      .catch((err) => console.log(err));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit();
  };

  const updateForm = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const onChange = (evt) => {
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
    <div className="edit-player">
      <h2 className="name">
        {formValues.first_name} {formValues.last_initial}
      </h2>
      <div className="stat-container">
        <div className="defense">
          <h2 className="edit-stats">Defense: {formValues.defense}</h2>
          <button
            className="red-button-edit"
            onClick={decrementDefense}
            value={formValues.defense}
            onChange={onChange}
          >
            -1
          </button>
          <button
            className="button-edit"
            onClick={incrementDefense}
            value={formValues.defense}
            onChange={onChange}
          >
            +1
          </button>
        </div>
        <div className="assists">
          <h2 className="edit-stats">Assists: {formValues.assists}</h2>
          <button
            className="red-button-edit"
            onClick={decrementAssists}
            value={formValues.assists}
            onChange={onChange}
          >
            -1
          </button>
          <button
            className="button-edit"
            onClick={incrementAssists}
            value={formValues.assists}
            onChange={onChange}
          >
            +1
          </button>
        </div>
        <div className="points">
          <h2 className="edit-stats">Points: {formValues.points}</h2>
          <button
            className="red-button-edit"
            onClick={decrementPoints}
            value={formValues.points}
            onChange={onChange}
          >
            -1
          </button>
          <button
            className="button-edit"
            onClick={incrementPoints}
            value={formValues.points}
            onChange={onChange}
          >
            +1
          </button>
        </div>
      </div>
      <br />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
