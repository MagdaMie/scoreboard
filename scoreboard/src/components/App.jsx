import { useState } from "react";

import Header from "./Header";
import Player from "./Player";


const App = () => {
  const [players, setPlayers] = useState([
    {
      name: "Artur",
      id: 1
    },
    {
      name: "Tomek",
      id: 2
    },
    {
      name: "Marcin",
      id: 3
    },
    {
      name: "Agata",
      id: 4
    }
  ]);

  const handleRemovePlayer = (id) => {
    setPlayers(prevPlayers => prevPlayers.filter(p => p.id !== id));
  }

  return (
    <div className="scoreboard">
      <Header
        title="Scoreboard"
        totalPlayers={players.length}
      />

      {/* Players list */}
      {players.map(player =>
        <Player
          name={player.name}
          id={player.id}
          key={player.id.toString()}
          removePlayer={handleRemovePlayer}
        />
      )}
    </div>
  );

}

export default App;
