import { useState } from "react";

import Header from "./Header";
import Player from "./Player";


const App = () => {
  const [players, setPlayers] = useState([
    {
      name: "Artur",
      score: 0,
      id: 1
    },
    {
      name: "Tomek",
      score: 0,
      id: 2
    },
    {
      name: "Marcin",
      score: 0,
      id: 3
    },
    {
      name: "Agata",
      score: 0,
      id: 4
    }
  ]);

  const handleRemovePlayer = (id) => {
    setPlayers(prevPlayers => prevPlayers.filter(p => p.id !== id));
  }

  
  const handleScoreChange = (id,delta) => {
    setPlayers(prevPlayers => prevPlayers.map(player => {
      if(player.id === id){
         return {
          name: player.name,
          score: player.score + delta,
          id: player.id
        }
      }
      return player
    }))
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
          score={player.score}
          id={player.id}
          key={player.id.toString()}
          removePlayer={handleRemovePlayer}
          changeScore={handleScoreChange}
        />
      )}
    </div>
  );

}

export default App;
