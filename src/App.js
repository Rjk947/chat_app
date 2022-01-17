import './App.css';
import React from 'react';
import Login from './components/Login';
import ChatList from './components/ChatList';
import { Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="chartList" element={<ChatList/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
