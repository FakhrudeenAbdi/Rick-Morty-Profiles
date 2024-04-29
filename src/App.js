import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CharactersList from './CharactersList';
import CharacterDetails from './CharacterDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<CharactersList />} />
          <Route path="/character/:id" element={<CharacterDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

