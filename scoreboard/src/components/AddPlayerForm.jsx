import { useState } from "react"

const AddPlayerForm = (props) => {
    const[value, setValue] = useState('')
    
    const handleSubmit = (event) => {
        if(value !== '') {
            event.preventDefault()
            props.addPlayer(value);
            setValue('')
        } else {
            event.preventDefault()
        }
    }

    return (
        <form onSubmit={(event) => handleSubmit(event)}>
            <input 
            type="text"
            value={value}
            placeholder="Enter a player name"
            onChange={(event) => setValue(event.target.value)} 
            />
            <input 
            type="submit"
            placeholder="Add Player" 
            />

        </form>
    )
}

export default AddPlayerForm