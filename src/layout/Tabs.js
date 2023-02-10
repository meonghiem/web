export let employeeTabs = [
    { text: 'Attendance Tracking', url: '/attendance', active: false , child: undefined},
    { text: 'My Profile', url: '/myProfile', active: true, child : [
      {c_text: 'Personal info', c_url: '/myProfile', c_active: true},
      {c_text: 'Staff info',    c_url: '/myProfile/StaffInfo', c_active: false}
      ]
    },
    { text: 'Leave Request', url: '/request', active: false , child: undefined}
];