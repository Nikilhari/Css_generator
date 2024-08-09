import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login.jsx'
import Register from './pages/Register/Register.jsx'
const App = () => {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Login />} />
        <Route path={'/Register'} element={<Register />} />
      </Routes>    </>
  )
}

export default App