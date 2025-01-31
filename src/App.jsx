import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import NewLoginPage from './components/LoginPage/NewLoginPage'
import MainDashboard from './components/Dashboard/MainDashboard'
import Home from './components/Dashboard/WebPage/Home'
import Header from './components/Dashboard/WebPage/Header'

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

function AppContent() {
  const location = useLocation();

  // Hide Header on the login page
  const hideHeaderRoutes = ['/login'];

  return (
    <div>
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/login" element={<NewLoginPage />} />
        <Route path="/home" element={<MainDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
