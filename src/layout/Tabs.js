export let employeeTabs = [
  {
    text: "Attendance Tracking",
    url: "/attendance",
    active: false,
    child: undefined,
  },
  {
    text: "My Profile",
    url: "/myProfile",
    active: true,
    child: [
      { c_text: "Personal info", c_url: "/myProfile", c_active: true },
      { c_text: "Staff info", c_url: "/myProfile/StaffInfo", c_active: false },
    ],
  },
  { text: "Leave Request", url: "/request", active: false, child: undefined },
];

export let adminTabs = [
  {
    text: "Staff Attendance",
    url: "/admin/staffAttendance",
    active: true,
    child: [
      { c_text: "Dash Board", c_url: "/admin/staffAttendance", c_active: true },
      {
        c_text: "Workhour Approval",
        c_url: "/admin/staffAttendance/workhourApproval",
        c_active: false,
      },
      {
        c_text: "Leave Approval",
        c_url: "/admin/staffAttendance/leaveApproval",
        c_active: false,
      },
    ],
  },
  {
    text: "Staff Information",
    url: "/admin/staffInfo",
    active: false,
    child: undefined,
  },
];
