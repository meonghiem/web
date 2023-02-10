import React from "react";
import Table from "../../../../components/table";
import AppLayout from "../../../../layout";

const data = [
  {
    key: "1",
    no: "1",
    requestType: "Hour Adjustment",
    requestDate: new Date("1995-12-17T03:24:00").toLocaleString(),
    adjustType: "REST",
    amount: "01:23",
    reason: "Quên rest",
  },
  {
    key: "2",
    no: "2",
    requestType: "Hour Adjustment",
    requestDate: new Date("1995-12-17T03:24:00").toLocaleString(),
    adjustType: "BACK",
    amount: "02:45",
    reason: "Quên back",
  },
  {
    key: "3",
    no: "3",
    requestType: "Hour Adjustment",
    requestDate: new Date("1995-12-17T03:24:00").toLocaleString(),
    adjustType: "OUT",
    amount: "01:59",
    reason: "Quên out",
  },
  {
    key: "4",
    no: "4",
    requestType: "Hour Adjustment",
    requestDate: new Date("1995-12-17T03:24:00").toLocaleString(),
    adjustType: "OUT",
    amount: "01:59",
    reason: "Quên out",
  },
  {
    key: "5",
    no: "5",
    requestType: "Hour Adjustment",
    requestDate: new Date("1995-12-17T03:24:00").toLocaleString(),
    adjustType: "OUT",
    amount: "01:59",
    reason: "Quên out",
  },
  {
    key: "6",
    no: "6",
    requestType: "Hour Adjustment",
    requestDate: new Date("1995-12-17T03:24:00").toLocaleString(),
    adjustType: "OUT",
    amount: "01:59",
    reason: "Quên out",
  },
  {
    key: "7",
    no: "7",
    requestType: "Hour Adjustment",
    requestDate: new Date("1995-12-17T03:24:00").toLocaleString(),
    adjustType: "OUT",
    amount: "01:59",
    reason: "Quên out",
  },
  {
    key: "8",
    no: "8",
    requestType: "Hour Adjustment",
    requestDate: new Date("1995-12-17T03:24:00").toLocaleString(),
    adjustType: "OUT",
    amount: "01:59",
    reason: "Quên out",
  },
  {
    key: "9",
    no: "9",
    requestType: "Hour Adjustment",
    requestDate: new Date("1995-12-17T03:24:00").toLocaleString(),
    adjustType: "OUT",
    amount: "01:59",
    reason: "Quên out",
  },
  {
    key: "10",
    no: "10",
    requestType: "Hour Adjustment",
    requestDate: new Date("1995-12-17T03:24:00").toLocaleString(),
    adjustType: "OUT",
    amount: "01:59",
    reason: "Quên out",
  },
];

const columns = [
  {
    title: "No",
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

const WorkhourApproval = () => {};

export default WorkhourApproval;
