import Button from "../../../../components/button";
// import ReactDOM from 'react-dom';
import Layout from "../../../../layout";
import './index.css'
import Logo512 from 'public/logo512.png'
import { useEffect, useState } from "react";
import axios from 'axios'

const Data = {
    name: "Long Long", 
    gender: "Male",
    dateOfBirth: "10/10/2001",
    birthplace: "Hanoi",
    maritalStatus: "....",
    email: "abcd@gmail.com",
    mobilePhone: "0123456789",
    emergencyPhone: "0987654321",
    address: "....."
}

const url = "http://localhost/restful_php_api/api/user/read.php"


// const [isDisabled, setIsDisabled] = useState(false);



export default function PersonalInfo() {
    const Tab = {
        parent: "My Profile",
        child: "Personal info"
    }
    // data = Data;
    const [data, setData] = useState({})

    const getData = async () =>{
        const data = await axios.get(url);
        console.log(data.data.data[0])
        setData(data.data.data[0])
    }

    useEffect(() =>{
        getData()
    },[])

    function edit(e) {
        alert("edit");
        let array = document.getElementsByClassName("inputBox");
        for(let i = 0; i < array.length; i++) {
            var a = array[i];
            a.disabled = false;
            a.style.border = "1px solid";
        }

        let saveBtn = document.getElementById("save");
        saveBtn.hidden = false;
        e.currentTarget.hidden = true;
    }
    
    function save(e) {
        alert("save");
        let array = document.getElementsByClassName("inputBox");
        for(let i = 0; i < array.length; i++) {
            var a = array[i];
            a.disabled = true;
            a.style.border = "0";
        }

        for(let key in data) {
            data[key] = document.getElementById(key).value;
        }

        alert(JSON.stringify(data))
        
        let editBtn = document.getElementById("edit");
        editBtn.hidden = false;
        e.currentTarget.hidden = true;
    }
    
    return (
        <Layout tab={Tab} content= {
            <div className="p_outside">
                
                <div className="profilePic">
                    <div> <b>Profile Picture </b></div>
                    <div><img src={Logo512} alt="Some profile pic"></img></div>
                </div>
                <div className="personalInfo">
                    <table className="infoTable" rules="none">
                        <tbody>

                        <tr className="infoRow">
                            <td className="rowStart"> <b>Basic info</b> </td>
                            <td className="infoCell">
                                <Button children="Edit" btnType="light" onClick={edit} id="edit" value="Edit"></Button>
                                <Button children="Save" btnType="light" onClick={save} id="save" value="Save" hidden={true}></Button>
                            </td>
                        </tr>

                        <tr className="infoRow">
                            <td className="infoCell"> <b>Name</b> <br /> 
                                <textarea type="text" className="inputBox" disabled={true} defaultValue={data.name} id="name"/>
                            
                            </td>
                        </tr>

                        <tr className="infoRow">
                            <td className="infoCell"> 
                                <b>Gender </b> <br />
                                <textarea type="text" className="inputBox" disabled={true} defaultValue={data.gender} id="gender"/>
                            </td>
                            <td className="infoCell"> 
                                <b>Date of birth </b> <br />
                                <textarea type="text" className="inputBox" disabled={true} defaultValue={data.dateOfBirth} id="dateOfBirth"/>
                            </td>
                        </tr>

                        <tr className="infoRow">
                            <td className="infoCell"> 
                                <b>birthplace </b> <br />
                                <textarea type="text" className="inputBox" disabled={true} defaultValue={data.birthplace} id="birthplace"/>
                            </td>
                            <td className="infoCell"> <b>Martital status </b> <br />
                                <textarea type="text" className="inputBox" disabled={true} defaultValue={data.maritalStatus} id="maritalStatus"/> 
                            </td>
                        </tr>

                        <tr className="infoRow">
                            <td className="infoCell"> <b>Email </b> <br />
                                <textarea type="text" className="inputBox" disabled={true} defaultValue={data.email} id="email"/>
                                </td>
                        </tr>

                        <tr className="infoRow rowLast">
                            <td className="rowStart"> <b>Contact info </b> </td>
                        </tr>

                        <tr className="infoRow">
                            <td className="infoCell"> <b>mobilePhone </b> <br />
                                <textarea type="text" className="inputBox" disabled={true} defaultValue={data.mobilePhone} id="mobilePhone"/>
                            </td>
                            <td className="infoCell"> <b>Emergency Phone </b> <br />
                                <textarea type="text" className="inputBox" disabled={true} defaultValue={data.emergencyPhone} id="emergencyPhone"/>
                            </td>
                        </tr>

                        <tr className="infoRow">
                            <td className="infoCell"> <b>Address </b> <br />
                                <textarea type="text" className="inputBox" disabled={true} defaultValue={data.address} id="address"/>
                            </td>
                        </tr>

                        </tbody>
                    </table>
                    

                </div>
            </div>
            }
        >
        </Layout>
    );
}