import { BrowserRouter, Routes, Route } from 'react-router-dom'
import User from './user'
import Admin from './admin'
import Testing from '../Test'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<User />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path='/test/*' element={<Testing />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router