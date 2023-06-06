import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar';
import Landing from './components/landing';
import VideoComp from './components/videoComp';
import LanguagesComp from './components/languagesComp'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Landing />
      <VideoComp />
      <LanguagesComp/>
    </div>
  );
}

export default App;
