import Layout from "../../../layout";
import Table from '../../../components/table';
import {column, data} from '../../../Test';
import './DatePicker/sass/DatePickerX.scss'
import Calendar from 'public/calendar.png'
import './index.css'

let dayOfMonths = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

function printDateChoice(from, to) {
    var list = [];
    list.push(<option selected>All </option>)
    for(let i = from; i <= to; i++)
        list.push(<option selected>{i} </option>)
    return list;
}
function checkLeepYear(year) {
    let leepYear = 0;
    if(year % 4 == 0) {
        if(year % 100 == 0) {
            if(year % 400 == 0)
                leepYear = 1;
        }
        else
            leepYear = 1;
    }
    return leepYear;
}

function checkDate() {
    var D = document.getElementById("day");
    var day = D.options[D.selectedIndex].value;
    if(day === "All") return true;

    var Y = document.getElementById("year");
    var year = Y.options[Y.selectedIndex].value;

    var M = document.getElementById("month");
    var month = M.options[M.selectedIndex].value;
    if(month == "All") {
        return true;
    }

    alert(day + " " + month + " " + year);

    var thisMonth = dayOfMonths[month];
    if(checkLeepYear(year) == 1 && month == 2) thisMonth = 29;
    if(day > thisMonth) {
        alert("Invalid date");
        return false
    }
    document.getElementById("dateChoose").hidden = true;
}

function showChoose() {
    document.getElementById("dateChoose").hidden = false;
}

export default function AttendanceTracking() {
    const Tab = {
        parent: "Attendance Tracking",
        child: undefined
    }

    return (
        <Layout tab={Tab} content={
            <div>
                <div>
                    
                    <div id="choose" onClick={showChoose} style={{height: "4rem", width: "15rem", padding: "0", border: "1px solid", display: "flex", alignItems: "center", marginBottom: "1rem"}}>
                        <div style={{width: "80%", textAlign: "center",  padding: "1rem", fontSize: "1.5rem"}}>Choose date</div>
                        <div style={{width: "19%", textAlign: "right"}}><img src={Calendar} style={{width: "3rem"}}/> </div>
                    </div>

                    <div id="dateChoose" hidden={true}>
                        <div id="choosing">
                            Choose date <br/>
                            <select name="day" id="day">
                                { printDateChoice(1, 31) }
                            </select> /

                            <select name="month" id="month">
                                {printDateChoice(1, 12)}
                            </select> /

                            <select name="year" id="year">
                                { printDateChoice(1990, 2023) }
                            </select>

                            <br/>

                            <button onClick={checkDate}>Submit</button>
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