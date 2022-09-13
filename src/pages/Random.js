import React, {useState} from 'react'
import CharacterCard from '../components/CharacterCard'

const Random = ({characters}) => {
  const [chosenCharacterId, setChosenCharacterId] = useState(0)

  function handleClick(){
    setChosenCharacterId(Math.floor(Math.random() * characters.length))
  }

  return (
    <div>
        <h1>Random</h1>
        <button onClick={handleClick}>Randomize!</button>
        {characters.map(character => {
          if (character.id === chosenCharacterId) {
            return <CharacterCard key={character.id} character={character} />
           }
        })}
    </div>
  )
}

export default Random