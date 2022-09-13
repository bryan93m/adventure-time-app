import {useState} from 'react';

const defaultCharacter = {
    displayName: '',
    fullName: '',
    sprite: '',
    species: '',
    sex: '',
    quotes: []
}


const NewCharacter = ({createCharacter}) => {
   const [formData, setFormData] = useState(defaultCharacter)

   function handleChange(e){
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    
    });
    if(e.target.name === 'quotes'){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value.split(',')
        })
    }
   }

   

    function handleSubmit(e){
        e.preventDefault();
        createCharacter({
            displayName: formData.displayName,
            fullName: formData.fullName,
            sprite: formData.sprite,
            species: formData.species,
            sex: formData.sex,
            quotes: formData.quotes
        })
        setFormData(defaultCharacter)
    }
  
  return (
    <div>
        <h1>New Character</h1>
        <form onSubmit={handleSubmit}>
            <input
                onChange={handleChange}
                value={formData.displayName}
                type="text" 
                name="displayName" 
                placeholder="Enter Nickname" 
            />
            <input 
                onChange={handleChange}
                value={formData.fullName}
                type="text" 
                name="fullName" 
                placeholder="Enter Full Name" 
            />
            <input 
                onChange={handleChange}
                value={formData.sprite}
                type="text" 
                name="sprite" 
                placeholder="Enter Image URL" 
            />
            <input 
                onChange={handleChange}
                value={formData.species}
                type="text" 
                name="species" 
                placeholder="Enter Species" 
            />
            <input 
                onChange={handleChange}
                value={formData.sex}
                type="text" 
                name="sex" 
                placeholder="Enter Sex" 
            />
            <input 
                onChange={handleChange}
                value={formData.quotes}
                type="text" 
                name="quotes" 
                placeholder="enter quotes" 
            />
            <button type='submit'>Add Character</button>
        </form>
    </div>
  )
}

export default NewCharacter