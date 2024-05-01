import Counter from "./Counter";

const Player = (props) => {
    return (
      <div className="player">
      {console.log(props.name + ' render')}
        <span className="player-name">
          <button className="remove-player" onClick={() => props.removePlayer(props.id)}>✖</button>
          {props.name}
        </span>
  
        <Counter 
        score={props.score}
        changeScore={props.changeScore}
        id={props.id}/>
      </div>
    );
  }

  export default Player