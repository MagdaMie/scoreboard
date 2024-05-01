import { useState, useRef,useEffect } from "react";

import Header from "./Header";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";



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


  let nextPlayerId = useRef(5)

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

  const handleAddPlayer = (name) => {
    const newPlayerId = nextPlayerId.current;
      setPlayers(prevPlayers => [
        ...prevPlayers,
        {
          name: name,
          score: 0,
          id: newPlayerId
        }
      ])
      nextPlayerId.current += 1
  }
  
  

  return (
    <div className="scoreboard">
      <Header
        title="Scoreboard"
        players={players}
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
       <AddPlayerForm 
       addPlayer={handleAddPlayer}
       />
    </div>
  );

}

export default App;
