import {BrowserRouter as Router} from 'react-router-dom';
//components;
import NavBar from './components/NavBar';
// pages;
import AnimatedRoutes from './AnimatedRoutes';


function App() {
  

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
