import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Error from './pages/Error'
import GlobalStyle from './components/Body'
import Header from './components/Header'
import About from './pages/About'
import Home from './pages/Home'
import AccommodationSheet from './pages/Accomodation'
import Footer from './components/Footer'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/apropos" element={<About />}/>
        <Route path="/fiche-logement/:id" element={<AccommodationSheet />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
)
