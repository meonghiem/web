import * as React from "react";
import avatar from "public/Kid.jpg";
import companyLogo from "public/Pionero.png";
import {ReactComponent as Vector} from "public/svg/Vector.svg";
import{ ReactComponent as LogoutIcon} from "public/svg/logout_icon.svg";
// import {ReactComponent as Company} from "public/svg/logoCom.svg";
// import {username} from '../../storage'
import {  useEffect, useState } from "react";
// import { type, setType } from "../../storage";

let username = localStorage.getItem('username')
let type = localStorage.getItem('type')
const Sidebar = function Sidebar({ data }) {

  const [time, setTime] = useState(new Date());

  useEffect(
    () => {
      const intervalId = setInterval(() => {
        setTime(new Date());
      }, 60000);
      return () => {
        clearInterval(intervalId)
      }
    } 
  )

  function formatTime() {
    var hour = time.getHours();
    var minute = time.getMinutes();
    var realTime = hour + ":" + (minute < 10 ? ('0' + minute) : minute);
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

  const inClick = () => {
    alert("In at " + formatTime());
    const btn = document.getElementById("in-btn");
    btn.style.display = "none";
    const box = document.getElementById("out-btn");
    box.style.display = "block";
  };
  
  const outClick = () => {
    alert("Out at " + formatTime());
    const btn = document.getElementById("out-btn");
    btn.style.display = "none";
    const box = document.getElementById("in-btn");
    box.style.display = "block";
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
          <h1 className="job">{formatTime()} </h1>
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
          <p>Total time today</p>
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
          > 12:00
            {/* {username} */}
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
              borderBottomWidth: "4px",
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
              borderBottomWidth: "4px",
              borderColor: "#6D28D9",
              cursor:"pointer"

            }}
            onClick={outClick}
          >
            Out
          </button>
        </div>
        <div style={{ bottom: "1rem", marginTop: "100px" }}>
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
            }}
            // className="flex justify-around my-auto center" // thieu text-align center
          >
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-1/4 px-4 py-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
              />
            </svg>

            <button className="w-1/2 px-4 py-2 font-bold text-white bg-blue-500 border-b-4 border-blue-700 rounded hover:bg-blue-400 hover:border-blue-500">
              Log out
            </button> */}

            <button onClick={logout} style={{ background: "#004b8f", border: "none",paddingLeft: "1rem", cursor:"pointer"  }} className="pl-4">
              {/* <LogoutIcon></LogoutIcon> */}
              <LogoutIcon />
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
    </>
  );
};

export default Sidebar;
