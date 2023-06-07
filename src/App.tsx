import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar';
import Landing from './components/landing';
import VideoComp from './components/videoComp';
import LanguagesComp from './components/languagesComp'
import FeaturesComp from "./components/featuersComp"
import HowItWorkComp from './components/howItWorkComp';
import Footer from './components/footer';
import Pricing from './components/pricing';
import Faqs from './components/faqsComp';
import UseCases from './components/useCases';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Landing />
      <VideoComp />
      <FeaturesComp/>
      <LanguagesComp/>
      <HowItWorkComp />
      <UseCases/>
      <Pricing />
      <Faqs/>
      <Footer/>
    </div>
  );
}

export default App;
