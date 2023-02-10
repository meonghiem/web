import { Routes, Route, Navigate } from 'react-router-dom'
import Login from '../Pages/Admin/Login/Login'
// import LeaveRequest from '../Pages/User/Leave Request'
import Dashboard from '../Pages/Admin/Staff Attendance/DashBoard'
import WorkhourApproval from '../Pages/Admin/Staff Attendance/Workhour Approval'
import LeaveApproval from '../Pages/Admin/Staff Attendance/Leave Approval'
import StaffInfo from '../Pages/Admin/Staff Information'


const Admin = () => {
    return (
      <>
        <Routes>
          <Route exact path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path= "/staffAttendance" element= {<Dashboard />} />
          <Route path="/staffAttendance/workhourApproval" element={<WorkhourApproval />}/>
          <Route path="/staffAttendance/leaveApproval" element={<LeaveApproval />}/>
          <Route path="/staffInfo" element={<StaffInfo />}/>
          
        </Routes>
      </>
    )
  }

  export default Admin