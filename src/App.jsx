import { useState } from 'react'
import './App.css'
import NewLoginPage from './components/LoginPage/NewLoginPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainDashboard from './components/Dashboard/MainDashboard'

function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<NewLoginPage />} />
        <Route path="/home" element={<MainDashboard />} />
      </Routes>
    </Router>
    </div>

  )
}

export default App
