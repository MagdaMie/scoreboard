import { useRef } from "react";

const AddPlayerForm = (props) => {
    const playerInput = useRef()
    
    const handleSubmit = (event) => {
        if(playerInput.current.value !== '') {
            event.preventDefault()
            props.addPlayer(playerInput.current.value);
            playerInput.current.value = ''
        } else {
            event.preventDefault()
        }
    }

    return (
        <form onSubmit={(event) => handleSubmit(event)}>
            <input 
            type="text"
            ref={playerInput}
            placeholder="Enter a player name"
            />
            <input 
            type="submit"
            placeholder="Add Player" 
            />

        </form>
    )
}

export default AddPlayerForm