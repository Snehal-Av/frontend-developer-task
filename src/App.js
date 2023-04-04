import logo from './logo.svg';
import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Blogs from './Components/Blogs';
import ContactUs from './Components/ContactUs';
import OurOffers from './Components/OurOffers';
import OurTeam from './Components/OurTeam';


function App() {
  return (
  <>
      <Header/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/offer' element={<OurOffers/>}/>
        <Route path='/team' element={<OurTeam/>}/>
      </Routes>
     
    </>
  );
}

export default App;
