import React, {useState} from 'react'
import CharacterCard from '../components/CharacterCard'
import {motion} from 'framer-motion'
const Random = ({characters}) => {
  const [chosenCharacterId, setChosenCharacterId] = useState(0)

  function handleClick(){
    setChosenCharacterId(Math.floor(Math.random() * characters.length))
  }

  return (
    <motion.div
    initial={{width: 0}} 
    animate={{width: '100%'}} 
    exit={{x: window.innerWidth}}    
    >
    <div className='random__header'>
        <h1>Random</h1>
        <button className='form__button' onClick={handleClick}>Randomize!</button>  
    </div>
    <div className='random__container'>
        {characters.map(character => {
          if (character.id === chosenCharacterId) {
            return <CharacterCard key={character.id} character={character} />
           }
           return null
        })}
      </div>
    </motion.div>
  )
}

export default Random