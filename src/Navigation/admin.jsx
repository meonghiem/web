import { Routes, Route, Navigate } from 'react-router-dom'

const Admin = () => {
    return (
      <>
        <Routes>
          <Route exact path="/" element={<Navigate to="/" />} />
          {/* <Route path="/login" element={<Login />} />
          <Route path="/*" element={<AdminContainer />} /> */}
        </Routes>
      </>
    )
  }

  export default Admin