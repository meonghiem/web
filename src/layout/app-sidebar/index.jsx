import * as React from "react";
import avatar from "public/Kid.jpg";
import companyLogo from "public/Pionero.png";
import {ReactComponent as Vector} from "public/svg/Vector.svg";
import {  useEffect, useState } from "react";

// import{ ReactComponent as LogoutIcon} from "public/svg/logout_icon.svg";
import { formatDate } from "../../storage";
import './sideBar.css'
import axios from 'axios'

let username = localStorage.getItem('username')
let type = localStorage.getItem('type')
let employeeID = localStorage.getItem("employeeId");

const g_url = `http://localhost:3001/attendance/getAttendance.php?id=${employeeID}`;
const c_url = `http://localhost:3001/attendance/create.php`;

let workType;
let isIn = false;

let reason;
let currentWorkTime ;
let dayOff = false;

const Sidebar = function Sidebar() {

  const [time, setTime] = useState({  h: (getCurrentTime()).getHours(),
                                      m: (getCurrentTime()).getMinutes()    });

  let inTime;
  function getCurrentTime() {
    // const str = '12/21/2024 06:34:59';

    // const date = parse(str, 'MM/dd/yyyy hh:mm:ss', new Date());
    return new Date(2023, 2, 8, 8, 5, 13);
  }
  useEffect(
    () => {
      getInTimeToday();
      const intervalId = setInterval(() => {
        let now = getCurrentTime();
        let hour = now.getHours();
        let minute = now.getMinutes()
        setTime({   h: hour,
                    m: minute    });
        if ((hour === 17 && isIn === true) || (hour=== 22 && isIn === true)) outClick();
        if(hour === 0) dayOff = checkDayoff();
      }, 30000);
      return () => {
        clearInterval(intervalId)
      }
    } 
  )

  function sendData() {
    let data = {
      type: workType,
      outEarlyReason: "",
      date: formatDate(),
      inTime: formatTime("hms"),
      id: employeeID,
      // count: 15
    }

    axios.post(c_url, data)
    .then(res => {
      console.log(res);
      alert(res.data[1])
    })
    .catch(error => console.log(error))
  }


  function getInTimeToday() {
    axios.get(g_url+"&command=inToday")
    .then(res => {
      // alert(res.data)
      console.log(res.data);
      if(res.data != "00:00") setIn();
      else {

        const [h, m, s] = res.data.split(":");
        inTime = {
          h: h,
          m: m,
          s: s
        }
      }
    })
    .catch(error => console.log(error))
  }

  function setIn() {

    const btn = document.getElementById("in-btn");
    btn.style.display = "none";
    const box = document.getElementById("out-btn");
    box.style.display = "block";
  }

  function formatTime(type) {
    var now = getCurrentTime();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    var realTime;
    if(type === "hms")
      realTime = hour + ":" + (minute < 10 ? ('0' + minute) : minute) + ":" + (second < 10 ? ('0' + second) : second);
    if(type === "hm")  
      realTime = hour + ":" + (minute < 10 ? ('0' + minute) : minute)
    return realTime;
  };

  function logout() {
    
    // setType("none");
    localStorage.removeItem('type')
    localStorage.removeItem('username')
    localStorage.removeItem('employeeId')
    // setTime(new Date());
    window.location.reload()
  }

  function getTimeDiff(t1, t2) {
    let time1 = t1.h * 60 + t1.m;
    let time2 = t2.h * 60 + t2.m;
    let diff = Math.abs(time1 - time2);

    let diffHour = Math.round(diff / 60);
    let diffMinute = diff % 60;
    return diffHour + ":" + (diffMinute > 10 ? diffMinute : '0' + diffMinute); 

  }

  function checkDayoff() {}

  function getCurrentWorkTime() {

    if(isIn === false) return "00:00"
    // if(currentWorkTime === 0) return "00:00";
    let now = getCurrentTime();
    let hour = now.getHours();
    let minute = now.getMinutes();

    return getTimeDiff(inTime, {h: hour, m: minute});

  }

  function checkIn() {

    let now = getCurrentTime();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    
    if(dayOff === true) {
      alert("Hôm nay là ngày nghỉ của bạn, không thể check-in");
      return false;
    }

    if(hour < 7) {
      alert("Vẫn chưa đến giờ làm đâu, thời gian check-in sớm nhất là 7h nhé");
      return false;
    }
    if(hour > 21 && minute >= 0) {
      alert("Đã muộn rồi, hãy về nhà nghỉ ngơi và quay lại vào hôm sau nhé");
      return false;
    }

    if( (hour >= 8 && hour < 17) ) {
      if(hour > 12) {
        alert("Đã quá giờ làm hôm nay, bạn đã bị tính nghỉ không lương");
        return false;
      }
      alert("Bạn đã đi muộn mất rồi");
      return true;
      // reason = "Đi muộn"
    }
    return true;
  }

  const inClick = () => {

    // document.getElementById("earlyCheck").hidden = false;

    let now = getCurrentTime();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    let check = checkIn();
    if(check == false) return check;
    if(hour > 17) workType = "overtime";
    else workType = "official";

    // setIn({h: hour, m: minute, s: second});
    isIn = true;

    sendData();
    
    setIn();

  };

  function checkOut() {
    // let timeOut = formatTime("hms");
    // let now = getCurrentTime();
    // let hour = now.getHours();
    // let minute = now.getMinutes();
    // let second = now
    alert("Out at " + formatTime("hm"));
    const btn = document.getElementById("out-btn");
    btn.style.display = "none";
    const box = document.getElementById("in-btn");
    box.style.display = "block";

    isIn = false;
    document.getElementById("earlyCheck").hidden = true;
    // setOut({h: hour, m: minute, s: second});

    // const data = {
    //   type : workType,
    //   employeeId: employeeID,
    //   date: 
    // }
  }

  function Cancel() {
    
    document.getElementById("earlyCheck").hidden = true;
  }
  
  const outClick = () => {
    let now = getCurrentTime();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    if(workType === "official" && hour < 17) { /// create, popup reason
      alert("Chưa đến giờ check-out 17:00 mà, không biết bạn có lí do gì xin về sớm không nhỉ?");
      document.getElementById("earlyCheck").hidden = false;
      return;
      /// popup
    } 
    if(workType === "overtime" && (hour * 60 + minute) - (inTime.h * 60 + inTime.m) < 60) {
      alert("Thời gian làm overtime tối thiểu là 1 tiếng, không biết bạn có lí do gì xin về sớm không nhỉ?");
      document.getElementById("earlyCheck").hidden = false;
      return;
      //// popup
    }

    checkOut(hour, minute, second);
    
  };

  return (
    <>
      <div className="container">
        <div className="logo_avatar">
          {/* <img src={companyLogo} alt="Company's Logo" /> */}
          {/* <Company /> */}
          <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M29.011 54.3747C43.0228 54.3747 54.375 43.0225 54.375 29.011C54.375 14.9772 43.0228 3.625 29.011 3.625C14.9995 3.625 3.625 14.9772 3.625 29.011C3.625 43.0225 14.9995 54.3747 29.011 54.3747Z" fill="url(#paint0_linear_1_13570)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.4465 42.3968C17.0453 43.9951 18.9043 45.3098 20.9438 46.2849L15.4465 33.6816L10.8654 23.1785C10.262 25.011 9.94919 26.9775 9.94919 29.0111C9.94919 34.2179 12.0498 38.9554 15.4465 42.3968V42.3968ZM42.5753 47.2684C48.1396 43.1343 51.7598 36.4969 51.7598 29.0111C51.7598 21.5249 48.1396 14.8879 42.5753 10.7313C38.7763 7.91564 34.0838 6.23962 29.0111 6.23962C23.9383 6.23962 19.2455 7.91564 15.4465 10.7313C9.88215 14.8879 6.26196 21.5249 6.26196 29.0111C6.26196 36.4969 9.88215 43.1343 15.4465 47.2684C19.2455 50.0838 23.9383 51.7601 29.0111 51.7601C34.0838 51.7601 38.7763 50.0841 42.5753 47.2684ZM42.5753 15.6253C43.2526 16.3032 43.873 17.0357 44.4304 17.8153L42.5753 22.1059L35.581 38.1733L31.9608 29.9273H26.0613L22.4411 38.1733L15.4465 22.1059L13.5917 17.8153C14.1489 17.0356 14.7692 16.3032 15.4465 15.6253C16.607 14.4405 17.9225 13.4181 19.3572 12.5861L25.9719 27.9831H32.0499L38.6646 12.5861C40.0993 13.4181 41.4148 14.4405 42.5753 15.6253V15.6253ZM42.5753 33.6816L47.1564 23.1785C47.7601 25.011 48.0729 26.9775 48.0729 29.0111C48.0729 34.2176 45.9723 38.9554 42.5753 42.3968C40.9766 43.9951 39.1178 45.3098 37.0783 46.2849L42.5753 33.6816V33.6816ZM29.0111 35.1564L34.3299 47.2908C32.6022 47.7962 30.8112 48.0521 29.0111 48.0506C27.2111 48.0521 25.4201 47.7962 23.6925 47.2908L29.0111 35.1564ZM29.0111 23.2232L34.4863 10.7537C32.7653 10.2174 30.9105 9.9492 29.0111 9.9492C27.1116 9.9492 25.2791 10.2174 23.5361 10.7537L29.0111 23.2232Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_1_13570" x1="3.63281" y1="3.6328" x2="54.3669" y2="54.3669" gradientUnits="userSpaceOnUse">
<stop stop-color="#2088FA"/>
<stop offset="1" stop-color="#032B5C"/>
</linearGradient>
</defs>
</svg>




        </div>
        <div className="logo_avatar">
          <img
            src={avatar}
            alt="Avatar"
            width={72}
            height={72}
            // className="rounded-[50%]"
            style={{ borderRadius: "50%" }}
          />
        </div>

        <div>
          <h3 className="nameText">
            <p>Welcome back</p>
            <p>{username}</p>
          </h3>
        </div>
        <div>
          <h1 className="job">{formatTime("hm")} </h1>
        </div>
        {/* <hr className="w-[90%] mx-auto" /> */}
        <hr
          style={{
            width: "90%",
            marginLeft: "auto",
            marginRight: "auto",
            color: "white",
            border: "1px solid white",
          }}
        ></hr>
        <h3 className="totalTime">
          <p>Current working time today</p>
        </h3>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="flex items-center justify-center"
        >
          <Vector />
          <h1
            style={{
              marginLeft: "0.5rem",
              marginRight: "0.5rem",
              color: "#ffffff",
              // fontSize: "1.5rem",
              lineHeight: "1.5rem",
              fontWeight: "500",
              textAlign: "center",
            }}
          > {getCurrentWorkTime()}
          </h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: 12,
            paddingBottom: 12,
          }}
        >
          <button
            id="in-btn"
            // className="w-1/2 px-4 py-2 font-bold text-white bg-red-500 border-b-4 border-red-700 rounded hover:bg-red-400 hover:border-red-500"
            style={{
              paddingTop: "0.5rem",
              paddingBottom: "0.5rem",
              paddingLeft: "1rem",
              paddingRight: "1rem",
              backgroundColor: "#EF4444",
              color: "#ffffff",
              fontWeight: "700",
              width: "50%",
              borderRadius: "0.25rem",
              borderBottomWidth: "0.3rem",
              borderColor: "#B91C1C",
              cursor:"pointer"
            }}
            onClick={inClick}
          >
            In
          </button>
          <button
            id="out-btn"
            // className="hidden w-1/2 px-4 py-2 font-bold text-white bg-purple-500 border-b-4 border-purple-700 rounded hover:bg-purple-400 hover:border-purple-500"
            style={{
              display: "none",
              paddingTop: "0.5rem",
              paddingBottom: "0.5rem",
              paddingLeft: "1rem",
              paddingRight: "1rem",
              backgroundColor: "#8B5CF6",
              color: "#ffffff",
              fontWeight: "700",
              width: "50%",
              borderRadius: "0.25rem",
              borderBottomWidth: "0.3rem",
              borderColor: "#6D28D9",
              cursor:"pointer"

            }}
            onClick={outClick}
          >
            Out
          </button>
        </div>
        <div style={{ bottom: "1rem", marginTop: "4rem" }}>
          <hr
            style={{
              border:"1px solid white",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "1.5rem",
              marginBottom: "1.5rem",
              width: "90%",
            }}
            // className="w-[90%] mx-auto my-6"
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "auto",
              marginLeft: "auto",
              textAlign :"center",
              padding: "0"
            }}
            // className="flex justify-around my-auto center" // thieu text-align center
          >

            <button onClick={logout} style={{ background: "#004b8f", border: "none",paddingLeft: "1rem", cursor:"pointer", width: "100%"  }} className="pl-4">
              <svg width="auto" height="auto" viewBox="0 0 172 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M89.2578 20.4453V22H83.5469V20.4453H89.2578ZM84.0938 10.625V22H82.1328V10.625H84.0938ZM90.2266 17.8672V17.6875C90.2266 17.0781 90.3151 16.513 90.4922 15.9922C90.6693 15.4661 90.9245 15.0104 91.2578 14.625C91.5964 14.2344 92.0078 13.9323 92.4922 13.7188C92.9818 13.5 93.5339 13.3906 94.1484 13.3906C94.7682 13.3906 95.3203 13.5 95.8047 13.7188C96.2943 13.9323 96.7083 14.2344 97.0469 14.625C97.3854 15.0104 97.6432 15.4661 97.8203 15.9922C97.9974 16.513 98.0859 17.0781 98.0859 17.6875V17.8672C98.0859 18.4766 97.9974 19.0417 97.8203 19.5625C97.6432 20.0833 97.3854 20.5391 97.0469 20.9297C96.7083 21.3151 96.2969 21.6172 95.8125 21.8359C95.3281 22.0495 94.7786 22.1562 94.1641 22.1562C93.5443 22.1562 92.9896 22.0495 92.5 21.8359C92.0156 21.6172 91.6042 21.3151 91.2656 20.9297C90.9271 20.5391 90.6693 20.0833 90.4922 19.5625C90.3151 19.0417 90.2266 18.4766 90.2266 17.8672ZM92.1094 17.6875V17.8672C92.1094 18.2474 92.1484 18.6068 92.2266 18.9453C92.3047 19.2839 92.4271 19.5807 92.5938 19.8359C92.7604 20.0911 92.974 20.2917 93.2344 20.4375C93.4948 20.5833 93.8047 20.6562 94.1641 20.6562C94.513 20.6562 94.8151 20.5833 95.0703 20.4375C95.3307 20.2917 95.5443 20.0911 95.7109 19.8359C95.8776 19.5807 96 19.2839 96.0781 18.9453C96.1615 18.6068 96.2031 18.2474 96.2031 17.8672V17.6875C96.2031 17.3125 96.1615 16.9583 96.0781 16.625C96 16.2865 95.875 15.987 95.7031 15.7266C95.5365 15.4661 95.3229 15.263 95.0625 15.1172C94.8073 14.9661 94.5026 14.8906 94.1484 14.8906C93.7943 14.8906 93.487 14.9661 93.2266 15.1172C92.9714 15.263 92.7604 15.4661 92.5938 15.7266C92.4271 15.987 92.3047 16.2865 92.2266 16.625C92.1484 16.9583 92.1094 17.3125 92.1094 17.6875ZM105.078 13.5469H106.789V21.7656C106.789 22.526 106.628 23.1719 106.305 23.7031C105.982 24.2344 105.531 24.638 104.953 24.9141C104.375 25.1953 103.706 25.3359 102.945 25.3359C102.622 25.3359 102.263 25.2891 101.867 25.1953C101.477 25.1016 101.096 24.9505 100.727 24.7422C100.362 24.5391 100.057 24.2708 99.8125 23.9375L100.695 22.8281C100.997 23.1875 101.331 23.4505 101.695 23.6172C102.06 23.7839 102.443 23.8672 102.844 23.8672C103.276 23.8672 103.643 23.7865 103.945 23.625C104.253 23.4688 104.49 23.237 104.656 22.9297C104.823 22.6224 104.906 22.2474 104.906 21.8047V15.4609L105.078 13.5469ZM99.3359 17.8672V17.7031C99.3359 17.0625 99.4141 16.4792 99.5703 15.9531C99.7266 15.4219 99.9505 14.9661 100.242 14.5859C100.534 14.2005 100.888 13.9062 101.305 13.7031C101.721 13.4948 102.193 13.3906 102.719 13.3906C103.266 13.3906 103.732 13.4896 104.117 13.6875C104.508 13.8854 104.833 14.1693 105.094 14.5391C105.354 14.9036 105.557 15.3411 105.703 15.8516C105.854 16.3568 105.966 16.9193 106.039 17.5391V18.0625C105.971 18.6667 105.857 19.2188 105.695 19.7188C105.534 20.2188 105.32 20.651 105.055 21.0156C104.789 21.3802 104.461 21.6615 104.07 21.8594C103.685 22.0573 103.229 22.1562 102.703 22.1562C102.188 22.1562 101.721 22.0495 101.305 21.8359C100.893 21.6224 100.539 21.3229 100.242 20.9375C99.9505 20.5521 99.7266 20.099 99.5703 19.5781C99.4141 19.0521 99.3359 18.4818 99.3359 17.8672ZM101.219 17.7031V17.8672C101.219 18.2526 101.255 18.612 101.328 18.9453C101.406 19.2786 101.523 19.5729 101.68 19.8281C101.841 20.0781 102.044 20.276 102.289 20.4219C102.539 20.5625 102.833 20.6328 103.172 20.6328C103.615 20.6328 103.977 20.5391 104.258 20.3516C104.544 20.1641 104.763 19.9115 104.914 19.5938C105.07 19.2708 105.18 18.9115 105.242 18.5156V17.1016C105.211 16.7943 105.146 16.5078 105.047 16.2422C104.953 15.9766 104.826 15.7448 104.664 15.5469C104.503 15.3438 104.299 15.1875 104.055 15.0781C103.81 14.9635 103.521 14.9062 103.188 14.9062C102.849 14.9062 102.555 14.9792 102.305 15.125C102.055 15.2708 101.849 15.4714 101.688 15.7266C101.531 15.9818 101.414 16.2786 101.336 16.6172C101.258 16.9557 101.219 17.3177 101.219 17.7031ZM121.984 16V16.625C121.984 17.4844 121.872 18.2552 121.648 18.9375C121.424 19.6198 121.104 20.2005 120.688 20.6797C120.276 21.1589 119.781 21.526 119.203 21.7812C118.625 22.0312 117.984 22.1562 117.281 22.1562C116.583 22.1562 115.945 22.0312 115.367 21.7812C114.794 21.526 114.297 21.1589 113.875 20.6797C113.453 20.2005 113.125 19.6198 112.891 18.9375C112.661 18.2552 112.547 17.4844 112.547 16.625V16C112.547 15.1406 112.661 14.3724 112.891 13.6953C113.12 13.013 113.443 12.4323 113.859 11.9531C114.281 11.4688 114.779 11.1016 115.352 10.8516C115.93 10.5964 116.568 10.4688 117.266 10.4688C117.969 10.4688 118.609 10.5964 119.188 10.8516C119.766 11.1016 120.263 11.4688 120.68 11.9531C121.096 12.4323 121.417 13.013 121.641 13.6953C121.87 14.3724 121.984 15.1406 121.984 16ZM120.023 16.625V15.9844C120.023 15.349 119.961 14.7891 119.836 14.3047C119.716 13.8151 119.536 13.4062 119.297 13.0781C119.062 12.7448 118.773 12.4948 118.43 12.3281C118.086 12.1562 117.698 12.0703 117.266 12.0703C116.833 12.0703 116.448 12.1562 116.109 12.3281C115.771 12.4948 115.482 12.7448 115.242 13.0781C115.008 13.4062 114.828 13.8151 114.703 14.3047C114.578 14.7891 114.516 15.349 114.516 15.9844V16.625C114.516 17.2604 114.578 17.8229 114.703 18.3125C114.828 18.8021 115.01 19.2161 115.25 19.5547C115.495 19.888 115.786 20.1406 116.125 20.3125C116.464 20.4792 116.849 20.5625 117.281 20.5625C117.719 20.5625 118.107 20.4792 118.445 20.3125C118.784 20.1406 119.07 19.888 119.305 19.5547C119.539 19.2161 119.716 18.8021 119.836 18.3125C119.961 17.8229 120.023 17.2604 120.023 16.625ZM128.844 20.0078V13.5469H130.734V22H128.953L128.844 20.0078ZM129.109 18.25L129.742 18.2344C129.742 18.8021 129.68 19.3255 129.555 19.8047C129.43 20.2786 129.237 20.6927 128.977 21.0469C128.716 21.3958 128.383 21.6693 127.977 21.8672C127.57 22.0599 127.083 22.1562 126.516 22.1562C126.104 22.1562 125.727 22.0964 125.383 21.9766C125.039 21.8568 124.742 21.6719 124.492 21.4219C124.247 21.1719 124.057 20.8464 123.922 20.4453C123.786 20.0443 123.719 19.5651 123.719 19.0078V13.5469H125.602V19.0234C125.602 19.3307 125.638 19.5885 125.711 19.7969C125.784 20 125.883 20.1641 126.008 20.2891C126.133 20.4141 126.279 20.5026 126.445 20.5547C126.612 20.6068 126.789 20.6328 126.977 20.6328C127.513 20.6328 127.935 20.5286 128.242 20.3203C128.555 20.1068 128.776 19.8203 128.906 19.4609C129.042 19.1016 129.109 18.6979 129.109 18.25ZM136.539 13.5469V14.9219H131.773V13.5469H136.539ZM133.148 11.4766H135.031V19.6641C135.031 19.9245 135.068 20.125 135.141 20.2656C135.219 20.401 135.326 20.4922 135.461 20.5391C135.596 20.5859 135.755 20.6094 135.938 20.6094C136.068 20.6094 136.193 20.6016 136.312 20.5859C136.432 20.5703 136.529 20.5547 136.602 20.5391L136.609 21.9766C136.453 22.0234 136.271 22.0651 136.062 22.1016C135.859 22.138 135.625 22.1562 135.359 22.1562C134.927 22.1562 134.544 22.0807 134.211 21.9297C133.878 21.7734 133.617 21.5208 133.43 21.1719C133.242 20.8229 133.148 20.3594 133.148 19.7812V11.4766Z" fill="white"/>
                <path d="M9.6 17L9.6 20.2L24 20.2L24 25L32 18.6L24 12.2L24 17L9.6 17Z" fill="white"/>
                <path d="M3.19981 33L17.5998 33C19.3646 33 20.7998 31.5648 20.7998 29.8L20.7998 23.4L17.5998 23.4L17.5998 29.8L3.19981 29.8L3.19981 7.4L17.5998 7.4L17.5998 13.8L20.7998 13.8L20.7998 7.4C20.7998 5.6352 19.3646 4.2 17.5998 4.2L3.19981 4.2C1.43501 4.2 -0.00019168 5.6352 -0.000191835 7.4L-0.000193793 29.8C-0.000193947 31.5648 1.43501 33 3.19981 33Z" fill="white"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <style>{`
        .container {
          position: relative;
          min-height: 100vh;
          background: #004b8f;
          color: #fff;
        }
        .logo_avatar {
          display: flex;
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
          justify-content: center;
        }
        .nameText {
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
          color: #ffffff;
          // font-size: 1rem;
          // line-height: 1.5rem;
          text-align: center;
        }
        .job {
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
          // font-size: 1.2rem;
          line-height: 1rem;
          text-align: center;
          color: #ffffff;
        }
        .totalTime {
          padding-top: 1.5rem;
          color: #ffffff;
          // font-size: 1rem;
          line-height: 1.5rem;
          text-align: center;
        }
        #in-btn:hover {
          background-color: #60a5fa;
          border-color: #3b82f6;
        }
        #out-btn:hover {
          background-color: #a78bfa;
          border-color: #8b5cf6;
        }
        #reset-btn:hover {
          background-color: #34d399;
          border-color: #10b981;
        }
        #back-btn {
          background-color: #fbbf24;
          border-color: #f59e0b;
        }
      `}</style>

      <div id="earlyCheck" hidden={true}>
          {
            workType === "overtime" ? 
            "Thời gian làm overtime tối thiểu là 1 tiếng, không biết bạn có lí do gì xin về sớm không nhỉ?" :
            "Chưa đến giờ check-out 17:00 mà, không biết bạn có lí do gì xin về sớm không nhỉ?"
          }
          <div>
            <textarea  id="earlyReason" placeholder="Lí do ngắn gọn"></textarea>
          </div>

          <div>
            <button id="checkoutEarly" onClick={checkOut}>
              Checkout
            </button>
            <br/>
            <button id="cancelEarly" onClick={Cancel}>
              Hủy
            </button>
          </div>
      </div>
    </>
  );
};

export default Sidebar;
