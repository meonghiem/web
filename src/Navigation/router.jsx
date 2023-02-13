import { BrowserRouter, Routes, Route } from 'react-router-dom'
import User from './user'
import Admin from './admin'
import Testing, { column } from '../Test'
// import { type } from '../storage'
import Login from '../Pages/Login'

let type = localStorage.getItem("type");

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={
          !type  ? <Login></Login> : (type === "user" ? <User></User> : <Admin></Admin>)
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default Router