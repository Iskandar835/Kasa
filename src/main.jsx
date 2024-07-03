import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Error from './components/Error'
import GlobalStyle from './components/Body/index.jsx'
import Header from './components/Header/index.jsx'
import About from './pages/Apropos/index.jsx'
import Home from './pages/Accueil/index.jsx'
import AccommodationSheet from './pages/Fiche-logement/index.jsx'
import Footer from './components/Footer/index.jsx'


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
