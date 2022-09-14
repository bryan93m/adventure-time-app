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
    axios.get('http://localhost:3000/characters')
    .then(res => {
      setCharacters(res.data)
    })
    .catch(err => console.log(err))
  }, []);

const createCharacter = (newCharacter) => {
  axios.post('http://localhost:3000/characters', newCharacter)
  .then(res => {
    setCharacters(prevCharacters => [...prevCharacters, res.data])
  })
}








  return (
    <>
      <NavBar />
      <div className='container'>
        <Routes>  
          <Route path='/' element={<SplashPage />} />
          <Route path='/home' element={<Home characters={characters}/>} />
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
