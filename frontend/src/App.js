import React, {useState} from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import LoginPage from './components/LoginPage';
import Register from './components/Register';
import GameLandingPage from './components/GameLandingPage';
import HomePage from './components/HomePage';
import Game from './components/Game';
import Quests from './components/Quests';


function App() {
  const [token, setToken] =useState();
  /*
  if (!token) {gi
    return <LoginPage setToken={setToken} />
  }
  */
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GameLandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
