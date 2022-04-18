import React from 'react'
import { Route, Routes } from 'react-router-dom';
import CharacterList from './Components/CharacterList/CharacterList';
import NavBar from './Components/NavBar/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/Character" element={<CharacterList/>}></Route>
      </Routes>
    </div>
  );
}
       

export default App;
    
      
        


          


