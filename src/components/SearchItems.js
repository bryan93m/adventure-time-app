import React from 'react'
import CharacterCard from './CharacterCard'

const SearchItems = ({characters}) => {
  return (
    <div>
        {characters.map(character => (
            <CharacterCard key={character.id} character={character} />
        ))}
    </div>
  )
}

export default SearchItems