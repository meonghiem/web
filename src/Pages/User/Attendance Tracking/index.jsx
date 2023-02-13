import Layout from "../../../layout";
import Table from '../../../components/table';
import Button from "../../../components/button";
import {column, data} from '../../../Test';
import Calendar from 'public/calendar.png'
import './index.css'
import axios from 'axios'
// import {username} from '../../../storage'
let username = localStorage.getItem('username')

let dayOfMonths = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]


function showChoose() {
    document.getElementById("dateChoose").hidden = false;
}

function hideChoose() {
    document.getElementById("dateChoose").hidden = true
}

function printDateChoice(from, to) {
    var list = [];
    list.push(<option selected>All </option>)
    for(let i = from; i <= to; i++)
        list.push(<option selected>{i} </option>)
    return list;
}
function checkLeepYear(year) {
    let leepYear = 0;
    if(year % 4 === 0) {
        if(year % 100 === 0) {
            if(year % 400 === 0)
                leepYear = 1;
        }
        else
            leepYear = 1;
    }
    return leepYear;
}

// const api = axios.create({baseURL: 'http://localhost:8080'});

function checkDate() {
    var D = document.getElementById("day");
    var day = D.options[D.selectedIndex].value;

    var Y = document.getElementById("year");
    var year = Y.options[Y.selectedIndex].value;

    var M = document.getElementById("month");
    var month = M.options[M.selectedIndex].value;

    var thisMonth = dayOfMonths[month];
    if(checkLeepYear(year) === 1 && month === 2) thisMonth = 29;
    if(day > thisMonth) {
        alert("Invalid date");
        return false
    }
    hideChoose();

    let data = {
        Day: day,
        Month: month,
        Year: year
    }

    axios.post('http://localhost:8080/choose', data)
    .then(res => {
        alert(JSON.stringify(res.data))
    })
    .catch(error => console.log(error))
}


export default function AttendanceTracking() {
    const Tab = {
        parent: "Attendance",
        child: undefined
    }

    return (
        <Layout tab={Tab} content={
            <div style={{
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                padding: "1rem",
                color: "#004b8f",
                // fontSize: "2rem"
            }}>
                <div style={{
                    fontSize: "2rem"
                }}>
                    
                    <div id="choose" onClick={showChoose} style={{height: "5rem", width: "20rem", padding: "0", border: "solid 0.2rem", display: "flex", alignItems: "center", marginBottom: "1rem"}}>
                        <div style={{width: "80%", textAlign: "center",  padding: "1rem"}}>Choose date</div>
                        <div style={{width: "19%", textAlign: "right", padding: "1rem"}}> <img alt="Calendar" src={Calendar} style={{width: "3rem"}}/> </div>
                    </div>

                    <div id="dateChoose" hidden={true}>
                        <div id="choosing">
                            Choose date <br/> <br/>
                            <select name="day" id="day">
                                { printDateChoice(1, 31) }
                            </select> /

                            <select name="month" id="month">
                                {printDateChoice(1, 12)}
                            </select> /

                            <select name="year" id="year">
                                { printDateChoice(1990, 2023) }
                            </select>

                            <br/> <br/>

                            <Button btnStyle={{width: "30%", height: "20%", fontSize: "3rem"}} btnType="light" children="Submit" onClick={checkDate} id="chooseDone"></Button>
                            <Button btnStyle={{width: "30%", height: "20%", fontSize: "3rem"}} btnType="light" children="Cancel" onClick={hideChoose} id="chooseDone"></Button>
                        </div>

                    </div>
                </div>
                <div>
                    <Table tableHead={column} data={data}></Table>
                </div>
            </div>
            }
        >
        </Layout>
    );
}