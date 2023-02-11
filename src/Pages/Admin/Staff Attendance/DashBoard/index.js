// import ButtonIcon from "../../../components/iconButton";
import Button from "../../../../components/Button1";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ReactComponent as Search } from "public/svg/search.svg";
import IconButton from "../../../../components/iconButton";
import Table from "../../../../components/table";

import AppLayout from "../../../../layout";
import Layout from "../../../../layout";

// interface DataType {
//     key: string
//     employeeId: string
//     employee: string
//     status: string
//     hourThisMonth: number
//   }

const columns = [
  {
    title: "Employee Id",
    dataIndex: "employeeId",
    key: "employeeId",
  },
  {
    title: "Employee",
    dataIndex: "employee",
    key: "employee",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Hour This Month",
    dataIndex: "hourThisMonth",
    key: "hourThisMonth",
  },
];

const data = [
  {
    key: "1",
    employeeId: "abc",
    employee: "32",
    status: "in",
    hourThisMonth: 132,
  },
  {
    key: "2",
    employeeId: "abc",
    employee: "32",
    status: "out",
    hourThisMonth: 132,
  },
  {
    key: "3",
    employeeId: "abc",
    employee: "32",
    status: "back",
    hourThisMonth: 132,
  },
  {
    key: "3",
    employeeId: "abc",
    employee: "32",
    status: "back",
    hourThisMonth: 132,
  },
  {
    key: "3",
    employeeId: "abc",
    employee: "32",
    status: "back",
    hourThisMonth: 132,
  },
  {
    key: "3",
    employeeId: "abc",
    employee: "32",
    status: "back",
    hourThisMonth: 132,
  },
  {
    key: "3",
    employeeId: "abc",
    employee: "32",
    status: "back",
    hourThisMonth: 132,
  },
  {
    key: "3",
    employeeId: "abc",
    employee: "32",
    status: "back",
    hourThisMonth: 132,
  },
  {
    key: "3",
    employeeId: "abc",
    employee: "32",
    status: "back",
    hourThisMonth: 132,
  },
  {
    key: "3",
    employeeId: "abc",
    employee: "32",
    status: "back",
    hourThisMonth: 132,
  },
  {
    key: "3",
    employeeId: "abc",
    employee: "32",
    status: "back",
    hourThisMonth: 132,
  },
];

const numbers = [
  ["Working", 15],
  ["Resting", 50],
  ["TOOK LEAVE", "60"],
  ["PENDING REQUEST", "70"],
];
const Dashboard = () => {
  const status = ["in", "out", "rest", "back"];
  const Tab = {
    parent: "Staff Attendance",
    child: "Dashboard",
  };

  numbers[0].push("#0F6FC6");
  numbers[1].push("#7DCA00");
  numbers[2].push("#FF0000");
  numbers[3].push("#FF9900");
  return (
    <AppLayout
      tab={Tab}
      isAdmin={true}
      content={
        <div
          style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
          className="admin px-2"
        >
          <div
            style={{
              display: "grid",
              alignItems: "center",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gridTemplateRows: "repeat(2, minmax(0, 1fr))",
              gap: "1rem",
              marginTop: "-1rem",
            }}
            // className="grid grid-cols-4 grid-rows-2 gap-4 items-center max-sm:grid-rows-3 max-sm:grid-cols-2 mb-8"
          >
            <Button style={{}}>
              <div>10 October 2022</div>
            </Button>
            <Button>17:18</Button>

            {numbers.map((number, index) => {
              return (
                <div
                  key={index}
                  style={{
                    gridColumnStart: `${index + 1}`,
                    fontSize: "1rem",
                    lineHeight: "1.5rem",
                    height: "50px !important",
                    border: `1px solid ${number[2]}`,
                    marginRight: "1rem",
                    marginTop: "-1rem",
                    width: "100%",
                    color: `${number[2]}`,
                    textAlign: "center",
                  }}
                >
                  <p>{number[1]}</p> <p>{number[0]}</p>{" "}
                </div>
              );
            })}
          </div>
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
                for="textId"
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
                for="textName"
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
                for="status"
                style={{
                  color: "#004b8f",
                  marginBottom: "-0.5rem",
                  fontWeight: "700",
                  fontSize: "1.25rem",
                }}
              >
                <p>Status</p>
              </label>
              <select
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
                  width: "80%",
                  marginTop: "-0.5rem",
                }}
              >
                <option selected>IN</option>
                <option value="OUT">OUT</option>
                <option value="REST">REST</option>
                <option value="BACK">BACK</option>
              </select>
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
              paddingTop: "1rem",
              paddingBottom: "1rem",
              height: "100%",
            }}
          >
            <Table
              tableHead={columns}
              data={data}
              tableStyle={{ maxHeight: "42.5vh" }}
            />
          </div>
        </div>
      }
    />
  );
};

export default Dashboard;
