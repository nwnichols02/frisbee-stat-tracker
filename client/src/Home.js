import { useState, useEffect } from "react";
import axios from "axios";
import Player from "./Player";

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
      <header>
        <h1>Frisbee tracker</h1>
        <br></br>
        <br />
        <div>
          <h2>Riverton B</h2>
          <button onClick={incrementCounter}>+1</button>
          <h1>{counter}</h1>
          <button onClick={decrementCounter}>-1</button>
        </div>
        <div>
          <h2>Opposing Team</h2>
          <button onClick={incrementCounterOpposing}>+1</button>
          <h1>{counterOpposing}</h1>
          <button onClick={decrementCounterOpposing}>-1</button>
        </div>
        <Player allPlayers={players} />
      </header>
    </div>
  );
}

export default Home;
