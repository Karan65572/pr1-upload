import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route} from 'react-router'
import Header from './Header'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Programs from './Programs'
import Footer from './Footer'
import Gallery from './Gallery'



function App() {


  return (
    <>
        <Header />
        <hr />
        
       <Routes>
            <Route path='/' element={<Home />}  />
            <Route path='/about' element={<About />}  />
            <Route path='/Programs' element={<Programs />}  />
             <Route path='/Gallery' element={<Gallery />}  />
            <Route path='/contact' element={<Contact />}  />
               
       </Routes>
       <Footer />
    </>
  )
}

export default App
