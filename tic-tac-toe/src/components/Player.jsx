import { useState } from 'react'

const Player = ({initialName, symbol, isActive}) => {
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false)

    const handleEditClick = () => {
        setIsEditing((prevState) => !prevState)
    }

    const handleNameChange = (event) => {
        setPlayerName(event.target.value)
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>    
    let buttonText = "Edit"

    if(isEditing) {
        editablePlayerName = <input type="text" value={playerName} onChange={handleNameChange} required/>
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    )
}

export default Player