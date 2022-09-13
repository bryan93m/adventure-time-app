import React from 'react'

const SearchBar = ({search, onSearch}) => {
  return (
    <div className='search__container'>
        <input 
        value={search}
        type="text" 
        placeholder="Search" 
        onChange={(e) => onSearch(e.target.value)}
        />
    </div>
  )
}

export default SearchBar