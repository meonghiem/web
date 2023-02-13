import { BrowserRouter, Routes, Route } from 'react-router-dom'
import User from './user'
import Admin from './admin'
import Testing from '../Test'
// import { type } from '../storage'
import { useAuth } from "../hook/AuthProvider";
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import TestLayout from '../testlayout'

const Router = () => {
  const type = localStorage.getItem('type')
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={
          !type ? <Login></Login> : (type === "user" ? <User></User> : <Admin></Admin>)
        } />
        {/* <Route path="/admin/*" element={<Admin />} />
        <Route path='/test/*' element={<Testing />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/test" element={<TestLayout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router