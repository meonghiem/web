// import './App.css';
import Button from './components/button'
// import IconButton from './components/iconButton';
// import Logo192 from 'public/logo192.png'
import Table from './components/table'
import AppTab from './layout/app-tab';
import Sidebar from './layout/app-sidebar';

const data = [];
for (let i = 0; i < 30; ++i) {
  data.push({
    key: i.toString(),
    day: 'Monday',
    date: '2014-12-24',
    in: '09:54',
    out: '16:54',
    total_break: '1.52',
    work_time: '5.39',
  })
}

const column = [
  {
    title: 'Day',
    dataIndex: 'day',
    key: 'id',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'location_name',
  },
  {
    title: 'In',
    dataIndex: 'in',
    key: 'description',
  },
  {
    title: 'Out',
    dataIndex: 'out',
    key: 'status',
  },
  {
    title: 'Total Break',
    dataIndex: 'total_break',
    key: 'total_break',
  },
  {
    title: 'Work Time',
    dataIndex: 'work_time',
    key: 'work_time',
  },
  {
    title: '',
    dataIndex: 'action',
    key: 'action',
    // render: () => <ButtonComponent className="button-color" children="Update" />,
  },
  {
    title: '',
    dataIndex: 'comment',
    key: 'comment',
  }
]

const tabName = "My Profile";
const childName = "Salary check";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          <Button>
            This is a button
          </Button>
        </p>
        <p>
          {/* <IconButton children={"<p>Nothing<\p>"} icon={Logo192}>
          </IconButton> */}
        </p>
      {/* <Table tableHead={column} data={data}></Table> */}
      </header>
      <div className='App-content'>
        <div>
        Hello
        <AppTab tabName={tabName} childName={childName}> </AppTab> <br/>
        </div>
        <Sidebar></Sidebar>
        <Table tableHead={column} data={data}></Table>
      </div>
      
    </div>
  );
}

export default App;
