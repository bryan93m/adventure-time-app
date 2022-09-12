import React from 'react'

const NewCharacter = () => {
  return (
    <div>
        <h1>New Character</h1>
        <form>
            <input 
                type="text" 
                name="NickName" 
                placeholder="Enter Nickname" 
            />
            <input 
                type="text" 
                name="FullName" 
                placeholder="Enter Full Name" 
            />
            <input 
                type="text" 
                name="image" 
                placeholder="Enter Image URL" 
            />
            <input 
                type="text" 
                name="Species" 
                placeholder="Enter Species" 
            />
            <input 
                type="text" 
                name="Sex" 
                placeholder="Enter Sex" 
            />
            <input 
                type="text" 
                name="Qoutes" 
                placeholder="Enter Quotes" 
            />
            <button type='submit'>Add Character</button>
        </form>
    </div>
  )
}

export default NewCharacter