import { useState } from 'react'

const Player = ({name, symbol}) => {
    const [isEditing, setIsEditing] = useState(false)

    const handleEditClick = () => {
        setIsEditing((prevState) => !prevState)
    }

    let playerName = <span className="player-name">{name}</span>    
    let buttonText = "Edit"

    if(isEditing) {
        playerName = <input type="text" value={name} required/>
        // buttonText='Save'
    }

    return (
        <li>
            <span className="player">
                {playerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    )
}

export default Player