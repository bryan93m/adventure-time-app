import {useState, useEffect} from 'react';
import axios from 'axios';
import {Route, Routes} from 'react-router-dom';
//components;
import NavBar from './components/NavBar';
// pages;
import Home from './pages/Home';
import Random from './pages/Random';
import Search from './pages/Search';
import NewCharacter from './pages/NewCharacter';
import About from './pages/About';
import SplashPage from './pages/SlashPage';


function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5555/characters')
    .then(res => {
      setCharacters(res.data)
    })
    .catch(err => console.log(err))
  }, []);

const createCharacter = (newCharacter) => {
  axios.post('http://localhost:5555/characters', newCharacter)
  .then(res => {
    setCharacters(prevCharacters => [...prevCharacters, res.data])
  })
}

const createComment = (newComment, character) => {
  let id = character.id 
  const patchBody = character.comments ? 
    ({ comments: [...character.comments, newComment] }) 
    : 
    ({comments : [newComment]})
    axios.patch(`http://localhost:5555/characters/${id}`, patchBody)
}

  return (
    <>
      <NavBar />
      <div className='container'>
        <Routes>  
          <Route path='/' element={<SplashPage />} />
          <Route path='/home' element={<Home characters={characters} createComment={createComment}/>} />
          <Route path='/random' element={<Random characters={characters}/> } />
          <Route path='/search' element={<Search characters={characters}/>} />
          <Route path='/newcharacter' element={<NewCharacter createCharacter={createCharacter}/>} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
