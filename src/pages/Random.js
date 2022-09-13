import React, {useState} from 'react'
import CharacterCard from '../components/CharacterCard'

const Random = ({characters}) => {
  const [chosenCharacterId, setChosenCharacterId] = useState(0)

  function handleClick(){
    setChosenCharacterId(Math.floor(Math.random() * characters.length))
  }

  return (
    <>
    <div className='random__header'>
        <h1>Random</h1>
        <button className='form__button' onClick={handleClick}>Randomize!</button>  
    </div>
    <div className='random__container'>
        {characters.map(character => {
          if (character.id === chosenCharacterId) {
            return <CharacterCard key={character.id} character={character} />
           }
        })}
      </div>
    </>
  )
}

export default Random