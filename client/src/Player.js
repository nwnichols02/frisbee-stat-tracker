import { useState } from "react";
import { Link } from "react-router-dom";

const initialCounterValues = {
  defense: 0,
  assists: 0,
  points: 0,
};

const Players = (props) => {
  //   const [players, setPlayers] = useState([])
  return (
    <div>
      <br></br>
      {props.allPlayers.map((player) => {
        return (
          <div key={player.player_id} className="player-wrapper">
            <Link to={`/${player.player_id}`}>
              <h2>
                {player.first_name} {player.last_initial}
              </h2>
            </Link>
            <h3>D's: {player.defense}</h3>
            <h3>Assists: {player.assists}</h3>
            <h3>Points: {player.points}</h3>
            {/* <Link to={`edit/${prayer.prayer_id}`}>
              <button>Edit</button>
            </Link>
            <Link to={`delete/${prayer.prayer_id}`}>
            <button onClick={() => setOpenModal(true)}>Delete</button>
                {openModal && <DeletePrayerModal closeModal={setOpenModal} id={prayer.prayer_id}/>} 
            </Link> */}
            {/* <button>Delete</button> */}
            {/* {/* onClick={editPrayerRoute} */}
          </div>
        );
      })}
    </div>
  );
};

export default Players;
