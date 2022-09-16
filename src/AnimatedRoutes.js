import {useState, useEffect} from 'react';
import axios from 'axios';
import {Routes, Route, useLocation} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion'


import Home from './pages/Home';
import Random from './pages/Random';
import Search from './pages/Search';
import NewCharacter from './pages/NewCharacter';
import About from './pages/About';
import SplashPage from './pages/SlashPage';

const AnimatedRoutes = () => {
  const location = useLocation();
        const [characters, setCharacters] = useState([]);
      
        useEffect(() => {
          axios.get(`${process.env.REACT_APP_API_URL}/characters`)
          .then(res => {
            setCharacters(res.data)
          })
          .catch(err => console.log(err))
        }, []);
      
      const createCharacter = (newCharacter) => {
        axios.post(`${process.env.REACT_APP_API_URL}/characters`, newCharacter)
        .then(res => {
          setCharacters(prevCharacters => [...prevCharacters, res.data])
        })
      }
      
      const createComment = (newComment, id) => {
        console.log(newComment, id)
        axios.patch(`${process.env.REACT_APP_API_URL}/characters/${id}`, newComment)
          .then(res => res.json())
          .then(data => console.log(data))
      }
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>  
          <Route path='/' element={<SplashPage />} />
          <Route path='/home' element={<Home characters={characters} createComment={createComment}/>} />
          <Route path='/random' element={<Random characters={characters}/> } />
          <Route path='/search' element={<Search characters={characters}/>} />
          <Route path='/newcharacter' element={<NewCharacter createCharacter={createCharacter}/>} />
          <Route path='/about' element={<About />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes