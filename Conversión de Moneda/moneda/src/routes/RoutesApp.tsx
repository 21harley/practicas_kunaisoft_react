import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ErrorPage from '../pages/404/404'
import Calculator from '../pages/Calculator/Calculator'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'

function RoutesApp () {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<ErrorPage/>} />
      <Route path="/calculator" element={<Calculator />} />
    </Routes>
   </BrowserRouter>
  )
}

export default RoutesApp
