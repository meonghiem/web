import { BrowserRouter, Routes, Route } from 'react-router-dom'
import User from './user'
import Admin from './admin'
import Testing from '../Test'
import { type } from '../storage'
import Login from '../Pages/Login'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={
          type === "none" ? <Login></Login> : (type === "user" ? <User></User> : <Admin></Admin>)
        } />
        {/* <Route path="/admin/*" element={<Admin />} />
        <Route path='/test/*' element={<Testing />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default Router