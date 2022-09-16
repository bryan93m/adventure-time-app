import React, {useState} from 'react'
import SearchBar from '../components/SearchBar'
import SearchItems from '../components/SearchItems'
import {motion} from 'framer-motion'






const Search = ({characters}) => {
  const [search, setSearch] = useState('')

  const displayCharacters = characters.filter(character => {
    return character.displayName.toLowerCase().includes(search.toLowerCase())|| 
    character.fullName.toLowerCase().includes(search.toLowerCase())||
    character.species.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <motion.div
    initial={{width: 0}} 
    animate={{width: '100%'}} 
    exit={{x: window.innerWidth}}
    >
        <h1>Search</h1>
        <div className='search__list'>
            <SearchBar search={search} onSearch={setSearch}/>
            <div className="column">
             <SearchItems characters={displayCharacters}/>
            </div>
        </div>
    </motion.div>
  )
}

export default Search