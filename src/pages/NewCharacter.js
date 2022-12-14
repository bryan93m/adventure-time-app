import {useState} from 'react';
import axios from 'axios';
import {motion} from 'framer-motion';

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


   const uploadImage = async (e) => {
         const files = e.target.files;
         const data = new FormData();
         data.append('file', files[0]);
         data.append('upload_preset', 'qj0obv6x');
         const res = await axios.post('https://api.cloudinary.com/v1_1/dtengdkya/image/upload', data);
         setFormData({
              ...formData,
              sprite: res.data.secure_url
         })
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
    <motion.div
    initial={{width: 0}} 
    animate={{width: '100%'}} 
    exit={{x: window.innerWidth}}
        
    >
        <h1>New Character</h1>
        <form onSubmit={handleSubmit} className='new__container'>
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
                onChange={uploadImage}
                files={formData.sprite}
                type="file"
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
            <textarea 
                onChange={handleChange}
                value={formData.quotes}
                type="text" 
                name="quotes" 
                placeholder="enter quotes" 
            />
            <button className='form__button' type='submit'>Add Character</button>
        </form>
    </motion.div>
  )
}

export default NewCharacter