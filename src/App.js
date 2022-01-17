import './App.css';
import React from 'react';
import Login from './components/Login';
import ChatList from './components/ChatList';
import Setting from './components/Setting';
import { Routes, Route, Link } from "react-router-dom";
import ChatBody from './components/ChatBody';


function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      <ChatList/>
      <ChatBody/>
      <Setting/>
      {/* <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="chartList" element={<ChatList/>}/>
      </Routes> */}
      
    </div>
  );
}

export default App;
