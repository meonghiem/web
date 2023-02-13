let employeeID = "2"
let type ="none"
let fullName = "none";

let inTime = {h: 0, m: 0, s: 0}, outTime = {h: 0, m: 0, s: 0};

function setEmployeeId(id) {
    employeeID = id;
}

function setType(t) {
    type = t;
}

function setIn(h, m) {
    inTime = {
        hour: h,
        minute: m
    }
}

function setOut (h, m) {
    outTime = {
        hour: h,
        minute: m
    }
}

function formatDate() {
    let now = new Date();
    let day = now.getDay();
    let month = now.getMonth();
    let year = now.getFullYear();

    return year + "-" + (month > 10 ? month : "0" + month) + "-" + (day > 10 ? day : "0" + day);
}


export {employeeID, setEmployeeId, type, setType, setIn, inTime, outTime, setOut, fullName, formatDate}