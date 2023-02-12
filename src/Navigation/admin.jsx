import { Routes, Route, Navigate } from 'react-router-dom'
// import LeaveRequest from '../Pages/User/Leave Request'
import Dashboard from '../Pages/Admin/Staff Attendance/DashBoard'
import WorkhourApproval from '../Pages/Admin/Staff Attendance/Workhour Approval'
import LeaveApproval from '../Pages/Admin/Staff Attendance/Leave Approval'
import StaffInfo from '../Pages/Admin/Staff Information'
import Notfound from '../Pages/Error'


const Admin = () => {
    return (
      <>
        <Routes>
          <Route path="/" element={ <Navigate to={'/staffAttendance'} />} />
          <Route path="/login" element={ <Navigate to={'/staffAttendance'} />} />
          <Route path= "/staffAttendance" element= {<Dashboard />} />
          <Route path="/staffAttendance/workhourApproval" element={<WorkhourApproval />}/>
          <Route path="/staffAttendance/leaveApproval" element={<LeaveApproval />}/>
          <Route path="/staffInfo" element={<StaffInfo />}/>
          <Route path="*" element={<Notfound></Notfound>}/>
          
        </Routes>
      </>
    )
  }

  export default Admin