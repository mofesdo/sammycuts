import { useState } from 'react'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Gallery from './components/Gallery/Gallery';

import './App.css'

function App() {

  return (
    <>
    <Navbar/>
    <Home/>
    <Gallery/>
    </>
  )
}

export default App
