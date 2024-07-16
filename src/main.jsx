import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GlobalStyle from './components/Structure/Body'
import Header from './components/Structure/Header'
import Home from './pages/Home'
import About from './pages/About'
import Accommodation from './pages/Accomodation'
import Error from './pages/Error'
import Footer from './components/Structure/Footer'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/apropos" element={<About />}/>
        <Route path="/fiche-logement/:id" element={<Accommodation />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
)