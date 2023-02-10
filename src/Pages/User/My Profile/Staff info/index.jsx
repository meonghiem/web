import Layout from '../../../../layout'
import './index.css'
// import Button from '../../../../components/button';

let Data = {
    jobTitle: "CEO",
    userType: "User",
    jobDes: "IT help desk",
    employeeId: "001",
    department: "IT",
    skill: "...",
    hiredDate: "...",
    office: "...",
    education: "...",
    terminationDate: "...",
    performanceReview: "...",
    language: "...",
    date: "...",
    detail: "...",
    history: "...",
    action: "...",
}

export default function StaffInfo({data}) {
    const Tab = {
        parent: "My Profile",
        child: "Staff info"
    }
    data = Data;

    return (
        <Layout tab={Tab} content={
            <div className='sInfo_outside'>
                <table className='staffInfoTable' rules='none'>
                    <tr className="infoRow ">
                        <td className="sRowStart"> <b>Work summary</b> </td>
                    </tr>

                    <tr className="infoRow">
                        <td className="staffInfoCell"> <b>Job Title</b> <br /> {data.jobTitle} </td>
                        <td className="staffInfoCell"> <b>User Type</b> <br /> {data.userType} </td>
                        <td className="staffInfoCell"> <b>Job Description</b> <br /> {data.jobDes} </td>
                    </tr>
                    
                    <tr className="infoRow">
                        <td className="staffInfoCell"> <b>Employee ID</b> <br /> {data.employeeId} </td>
                        <td className="staffInfoCell"> <b>Department</b> <br /> {data.department} </td>
                        <td className="staffInfoCell"> <b>Skill</b> <br /> {data.skill} </td>
                    </tr>

                    <tr className="infoRow">
                        <td className="staffInfoCell"> <b>Hired Date</b> <br /> {data.hiredDate} </td>
                        <td className="staffInfoCell"> <b>Office</b> <br /> {data.office} </td>
                        <td className="staffInfoCell"> <b>Education</b> <br /> {data.education} </td>
                    </tr>

                    <tr className="infoRow">
                        <td className="staffInfoCell"> <b>Termination Date</b> <br /> {data.terminationDate} </td>
                        <td className="staffInfoCell"> <b>Performance Review</b> <br /> {data.performanceReview} </td>
                        <td className="staffInfoCell"> <b>Language</b> <br /> {data.language} </td>
                    </tr>

                    <tr className="infoRow sRowLast">
                        <td className="sRowStart"> <b>Work summary 2</b> </td>
                    </tr>

                    <tr className='infoRow'>
                        <td className="staffInfoCell"> <b>Date</b> <br /> {data.date} </td>
                        <td className="staffInfoCell"> <b>Detail</b> <br /> {data.detail} </td>
                    
                    </tr>

                    <tr>
                        <td className="staffInfoCell"> <b>History</b> <br /> {data.history} </td>
                        <td className="staffInfoCell"> <b>Action</b> <br /> {data.action} </td>
                    </tr>


                </table>
            </div>
            }
        >

        </Layout>
    );
}