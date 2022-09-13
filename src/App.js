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


function App() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState('');

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
          <Route path='/' element={<Home characters={characters}/>} />
          <Route path='/random' element={<Random />} />
          <Route path='/search' element={<Search />} />
          <Route path='/newcharacter' element={<NewCharacter createCharacter={createCharacter}/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
