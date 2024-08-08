import react from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'


import './App.css'

import HomePage from './components/home/HomePage'
import Footer from './components/Footer'
import Page from './components/learn/Page'
import Aboutpage from './components/about/Aboutpage'
import Bar from './components/Bar';

function App() {

  return (
    <BrowserRouter>
    <Bar />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/page' element={<Page />} />
      <Route path='/aboutpage' element={<Aboutpage />} />
    </Routes>
    <Footer />
    </BrowserRouter>
   
      
    
  )
}

export default App
