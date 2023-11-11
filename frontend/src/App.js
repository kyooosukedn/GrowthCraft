import React, {useState} from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import LoginPage from './components/LoginPage';
import Register from './components/Register';

function App() {
  const [token, setToken] =useState();

  if (!token) {
    return <LoginPage setToken={setToken} />
  }

  return (
      <Register />
  );
}

export default App;
