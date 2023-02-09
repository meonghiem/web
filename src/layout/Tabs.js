export let employeeTabs = [
    { text: 'Attendance Tracking', url: '/employee/AttendanceTracking', active: false , child: undefined},
    { text: 'My Profile', url: '/employee/MyProfile/PersonalInfo', active: true, child : [
      {c_text: 'Personal info', c_url: '/employee/MyProfile/PersonalInfo', c_active: true},
      {c_text: 'Staff info',    c_url: '/employee/MyProfile/StaffInfo', c_active: false},
      {c_text: 'Salary check',  c_url: '/employee/MyProfile/SalaryCheck', c_active: false}
      ]
    },
    { text: 'Leave Request', url: '/employee/LeaveRequest', active: false , child: undefined}
];