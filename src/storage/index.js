// const [employeeID, setEmployeeId] = useState("");
let employeeID;
let type;
// const [type, setType] = useState();

// const [user]
let username;
// let id = 4;

function setUsername(name) {
  username = name;
  console.log(username);
}

function setEmployeeId(id) {
  employeeID = id;
}

function setType(t) {
  type = t;
}

export { username, employeeID, setUsername, setEmployeeId, type, setType };
