import Stats from "./Stats";
import Stopwatch from "./StopWach";

const Header = (props) => {
  return (
    <header>
      <Stats 
      players={props.players}/>
      <h1>{props.title}</h1>


      <Stopwatch />
    </header>
  );
}

export default Header