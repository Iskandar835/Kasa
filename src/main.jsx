import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Error from './pages/Error'
import GlobalStyle from './components/Body.jsx'
import Header from './components/Header.jsx'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import AccommodationSheet from './pages/Accomodation.jsx'
import Footer from './components/Footer.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/apropos" element={<About />}/>
        <Route path="/fiche-logement" element={<AccommodationSheet />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
)
