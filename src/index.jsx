import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Error from './pages/404/404'
import About from './pages/About/About'
import House from './pages/House/House'
import Header from './components/Header'
import Footer from './components/Footer'
import './styles/index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<Error />} />
        <Route path="/house/:id" element={<House />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
)

// reportWebVitals()
