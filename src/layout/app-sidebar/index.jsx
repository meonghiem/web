import * as React from "react";
import avatar from "public/Kid.jpg";
import companyLogo from "public/Pionero.png";
import {ReactComponent as Vector} from "public/svg/Vector.svg";
import{ ReactComponent as LogoutIcon} from "public/svg/logout_icon.svg";
import {username} from '../../storage'
import {  useEffect, useState } from "react";
import { type, setType } from "../../storage";

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
    setType("none");
    setTime(new Date());
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
          <img src={companyLogo} alt="Company's Logo" />
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
