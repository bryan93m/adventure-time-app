import React from 'react';
import Home from './components/Home';
import Random from './components/Random';
import Search from './components/Search';
import NavBar from './components/NavBar';
import {Route, Routes} from 'react-router-dom';


function App() {
  return (
    <>
      <NavBar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/random' element={<Random />} />
          <Route path='/search' element={<Search />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
