import {BrowserRouter as Router} from 'react-router-dom';
//components;
import NavBar from './components/NavBar';
// pages;
import AnimatedRoutes from './AnimatedRoutes';


function App() {
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
    <>
    <Router>
      <NavBar />
        <div className='container'>
          <AnimatedRoutes />
        </div>
      </Router>
    </>
  );
}

export default App;
