import React, {useState} from 'react'
import SearchBar from '../components/SearchBar'
import SearchItems from '../components/SearchItems'






const Search = ({characters}) => {
  const [search, setSearch] = useState('')

  const displayCharacters = characters.filter(character => {
    return character.displayName.toLowerCase().includes(search.toLowerCase())|| 
    character.fullName.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <>
        <h1>Search</h1>
        <div className='search__list'>
            <SearchBar onSearch={setSearch}/>
            <div className="column">
             <SearchItems characters={displayCharacters}/>
            </div>
        </div>
    </>
  )
}

export default Search