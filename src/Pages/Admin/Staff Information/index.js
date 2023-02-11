import React from "react";
import Table from "../../../components/table";
import AppLayout from "../../../layout";
import { ReactComponent as Search } from "public/svg/search.svg";
import Button from "../../../components/Button1";
import { useState } from "react";
import InputText from "../../../components/inputText";
import InputSelect from "../../../components/inputSelect";

const data = [];
for (let i = 0; i < 30; ++i) {
  data.push({
    key: i.toString(),
    employeeId: "P0001",
    employee: "Long",
    department: "PM",
    accountStatus: "Active",
    role: "Admin",
    hiredDate: "4/5/2021",
    action: "",
  });
}
const url = "http://localhost/restful_php_api/api/user/create.php";

const column = [
  {
    title: "Employee ID",
    dataIndex: "employeeId",
    key: "id",
  },
  {
    title: "Employee",
    dataIndex: "employee",
    key: "location_name",
  },
  {
    title: "Department",
    dataIndex: "department",
    key: "description",
  },
  {
    title: "Account Status",
    dataIndex: "accountStatus",
    key: "status",
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "total_break",
  },
  {
    title: "Hired Date",
    dataIndex: "hiredDate",
    key: "work_time",
  },
];

const StaffInfo = () => {
  const Tab = {
    parent: "Staff Information",
  };

  const [form, setForm] = useState({
    email: "",
    name: "",
    gender: "",
    dateOfBirth: "",
    birthplace: "",
    maritalStatus: "",
    mobilePhone: "",
    address: "",
    employeeId: "",
    userType: "",
    jobTitle: "",
    jobDescription: "",
    emergencyPhone: "",
    department: "",
    skill: "",
    office: "",
    education: "",
    performanceReview: 0,
    language: "",
    hiredDate: "",
    accountStatus: 0,
  });

  const [show, setShow] = useState(false);
  console.log(show);
  const create = (e) => {
    console.log("create");
    // e.preventDefault();

    const data = e.target.elements;
    console.log(data);
    setShow(!show);
  };

  const closeAndAddStaff = () => {
    console.log("close");
    setShow(!show);
  };

  return (
    <AppLayout
      tab={Tab}
      isAdmin={true}
      content={
        <>
          {!show && (
            <div style={{ paddingLeft: "1rem", paddingRight: "1rem" }}>
              <form
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
                  gap: "1rem",
                  alignItems: "flex-end",
                  marginTop: "-0.5rem",
                }}
                // className="grid grid-cols-5 gap-4 max-md:grid-cols-4 max-sm:grid-cols-2 items-end"
              >
                <div style={{ width: "100%" }}>
                  <label
                    htmlFor="textId"
                    style={{
                      color: "#004b8f",
                      marginBottom: "-0.5rem",
                      fontWeight: "700",
                      fontSize: "1.25rem",
                    }}
                  >
                    <p>Employee ID</p>
                  </label>
                  <input
                    type="text"
                    id="textId"
                    style={{
                      backgroundColor: "#F9FAFB",
                      color: "#111827",
                      fontSize: "0.875rem",
                      lineHeight: "1.75rem",
                      borderWidth: "2px ",
                      borderColor: "#004B8F",
                      display: "block",
                      width: "80%",
                      marginTop: "-0.5rem",
                    }}
                  />
                </div>
                <div style={{ width: "100%" }}>
                  <label
                    htmlFor="textName"
                    style={{
                      color: "#004b8f",
                      marginBottom: "-0.8rem",
                      fontWeight: "700",
                      fontSize: "1.25rem",
                    }}
                  >
                    <p>Employee</p>
                  </label>
                  <input
                    type="text"
                    id="textId"
                    style={{
                      backgroundColor: "#F9FAFB",
                      color: "#111827",
                      fontSize: "0.875rem",
                      lineHeight: "1.75rem",
                      borderWidth: "2px ",
                      borderColor: "#004B8F",
                      display: "block",
                      width: "80%",
                      marginTop: "-0.5rem",
                    }}
                  />
                </div>
                <div style={{ width: "100%" }}>
                  <label
                    htmlFor="textName"
                    style={{
                      color: "#004b8f",
                      marginBottom: "-0.8rem",
                      fontWeight: "700",
                      fontSize: "1.25rem",
                    }}
                  >
                    <p>Department</p>
                  </label>
                  <input
                    type="text"
                    id="textId"
                    style={{
                      backgroundColor: "#F9FAFB",
                      color: "#111827",
                      fontSize: "0.875rem",
                      lineHeight: "1.75rem",
                      borderWidth: "2px ",
                      borderColor: "#004B8F",
                      display: "block",
                      width: "80%",
                      marginTop: "-0.5rem",
                    }}
                  />
                </div>
                <div style={{ width: "100%" }}>
                  <label
                    htmlFor="textName"
                    style={{
                      color: "#004b8f",
                      marginBottom: "-0.8rem",
                      fontWeight: "700",
                      fontSize: "1.25rem",
                    }}
                  >
                    <p>Account status</p>
                  </label>
                  <input
                    type="text"
                    id="textId"
                    style={{
                      backgroundColor: "#F9FAFB",
                      color: "#111827",
                      fontSize: "0.875rem",
                      lineHeight: "1.75rem",
                      borderWidth: "2px ",
                      borderColor: "#004B8F",
                      display: "block",
                      width: "80%",
                      marginTop: "-0.5rem",
                    }}
                  />
                </div>

                <div style={{ width: "100%" }}>
                  <button
                    id="status"
                    type="text"
                    style={{
                      backgroundColor: "#F9FAFB",
                      color: "#111827",
                      fontSize: "0.875rem",
                      height: "2.2rem",
                      borderWidth: "2px ",
                      borderColor: "#004B8F",
                      paddingLeft: "5px",
                      display: "block",
                      width: "30%",
                      verticalAlign: "center",
                    }}
                  >
                    <Search
                      style={{ margin: "2px auto", verticalAlign: "center" }}
                    />
                  </button>
                </div>
              </form>

              <div
                style={{
                  display: "grid",
                  alignItems: "center",
                  gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
                  //   gridTemplateRows: "repeat(2, minmax(0, 1fr))",
                  gap: "1rem",
                  marginTop: "2rem",
                }}
                // className="grid grid-cols-4 grid-rows-2 gap-4 items-center max-sm:grid-rows-3 max-sm:grid-cols-2 mb-8"
              >
                <div
                  style={{
                    gridColumnStart: "4",
                    width: "80%",
                    lineHeight: "1.75rem",
                  }}
                >
                  <Button>
                    <div>CSV Download</div>
                  </Button>
                </div>
                <div style={{ gridColumnStart: "5", width: "80%" }}>
                  <Button Function={() => closeAndAddStaff()}>
                    <div>Add New Staff</div>
                  </Button>
                </div>
              </div>
            </div>
          )}

          {show && (
            <div
              style={{
                // paddingLeft: "1rem",
                // paddingRight: "1rem",
                background: "rgba(255,255,255,0.5)",
                position: "fixed",
                height: "100vh",
                width: "100%",
                top: 0,
                zIndex: "1",
                // filter: "saturate(20%)",
              }}
              className="modal"
            >
              <div
                style={{
                  position: "relative",
                  top: "6.5rem",
                  width: "80%",
                  height: "75%",
                  background: "#FFFFF",
                  border: "1px solid #D6D6D6",
                  borderRadius: "10px",
                  padding: "2rem",
                  // right: "10rem",
                  // margin: "0 auto",
                }}
              >
                <form
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                    gap: "1rem",
                    marginTop: "-1rem",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      fontWeight: "700",
                      fontSize: "2rem",
                    }}
                  >
                    <div>Create New User</div>
                    <div style={{ fontWeight: "300", fontSize: "1.3rem" }}>
                      Basic info
                    </div>
                  </div>
                  <InputText
                    inputStyle={{
                      width: "100%",
                      marginTop: "-1rem",
                      gridColumnStart: "1",
                    }}
                    idInput="email"
                  >
                    Email
                  </InputText>
                  <InputText
                    inputStyle={{ width: "100%", marginTop: "-1rem" }}
                    idInput="name"
                  >
                    Name
                  </InputText>
                  <InputSelect
                    inputStyle={{ width: "100%", marginTop: "-1rem" }}
                    idInput={"gender"}
                    datas={["MALE", "FEMALE"]}
                  >
                    Gender
                  </InputSelect>
                  <InputText
                    inputStyle={{ width: "100%", marginTop: "-1rem" }}
                    idInput="DOB"
                  >
                    Date Of Birth
                  </InputText>
                  <InputText
                    inputStyle={{ width: "100%", marginTop: "-1rem" }}
                    idInput="birthPlace"
                  >
                    BirthPlace
                  </InputText>
                  <InputSelect
                    inputStyle={{ width: "100%", marginTop: "-1rem" }}
                    idInput="maritalStatus"
                    datas={["Single", "Complicated", "Marriaged"]}
                  >
                    Marital Status
                  </InputSelect>
                  <InputText
                    inputStyle={{ width: "100%", marginTop: "-1rem" }}
                    idInput="mobilePhone"
                  >
                    Mobile Phone
                  </InputText>
                  <InputText
                    inputStyle={{ width: "100%", marginTop: "-1rem" }}
                    idInput="address"
                  >
                    Address
                  </InputText>
                  <div>
                    <div style={{ fontWeight: "300", fontSize: "1.3rem" }}>
                      Work info
                    </div>
                  </div>
                  <InputText
                    inputStyle={{
                      width: "100%",
                      marginTop: "-1rem",
                      gridColumnStart: "1",
                    }}
                    idInput="employeeId"
                  >
                    Employee ID
                  </InputText>
                  <InputText
                    inputStyle={{
                      width: "100%",
                      marginTop: "-1rem",
                    }}
                    idInput="userType"
                  >
                    User Type
                  </InputText>
                  <InputText
                    inputStyle={{
                      width: "100%",
                      marginTop: "-1rem",
                    }}
                    idInput="jobTitle"
                  >
                    Job Title
                  </InputText>
                  <InputText
                    inputStyle={{
                      width: "100%",
                      marginTop: "-1rem",
                    }}
                    idInput="jobDescription"
                  >
                    Job Description
                  </InputText>
                  <InputSelect
                    inputStyle={{
                      width: "100%",
                      marginTop: "-1rem",
                    }}
                    idInput="deparment"
                    datas={["PM", "DEV"]}
                  >
                    Department
                  </InputSelect>
                  <InputText
                    inputStyle={{
                      width: "100%",
                      marginTop: "-1rem",
                    }}
                    idInput="skill"
                  >
                    Skill
                  </InputText>
                  <InputText
                    inputStyle={{
                      width: "100%",
                      marginTop: "-1rem",
                    }}
                    idInput="office"
                  >
                    Office
                  </InputText>
                  <InputText
                    inputStyle={{
                      width: "100%",
                      marginTop: "-1rem",
                    }}
                    idInput="education"
                  >
                    Education
                  </InputText>
                  <InputText
                    inputStyle={{
                      width: "100%",
                      marginTop: "-1rem",
                    }}
                    idInput="performanceReview"
                  >
                    Performance Review
                  </InputText>
                  <InputText
                    inputStyle={{
                      width: "100%",
                      marginTop: "-1rem",
                    }}
                    idInput="language"
                  >
                    Language
                  </InputText>
                  <InputText
                    inputStyle={{
                      width: "100%",
                      marginTop: "-1rem",
                    }}
                    idInput="hiredDate"
                  >
                    Hired Date
                  </InputText>
                  <InputSelect
                    inputStyle={{
                      width: "100%",
                      marginTop: "-1rem",
                    }}
                    idInput="accountStatus"
                    datas={["Active", "InActive"]}
                  >
                    Account Status
                  </InputSelect>
                  {/* <div
                    style={{
                      gridColumnStart: "3",
                      width: "40%",
                      lineHeight: "1.75rem",
                    }}
                  >
                    <Button>
                      <div>Close</div>
                    </Button>
                  </div>
                  <div style={{ gridColumnStart: "4", width: "40%" }}>
                    <Button>
                      <div>Create</div>
                    </Button>
                  </div> */}
                </form>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row-reverse",
                    marginRight: "3rem",
                  }}
                >
                  <div
                    style={{
                      width: "6rem",
                      padding: "10px",
                    }}
                  >
                    <Button Function={() => closeAndAddStaff()}>Close</Button>
                  </div>
                  <div
                    style={{
                      width: "6rem",
                      padding: "10px",
                    }}
                  >
                    <Button
                      typeButton="submit"
                      Function={(e) => {
                        create(e);
                      }}
                    >
                      Create
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      }
    />
  );
};

export default StaffInfo;
