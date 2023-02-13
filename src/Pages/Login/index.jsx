
// import { signIn } from 'next-auth/react'
import React from 'react'
import styles from './Login.module.css'
import { useState } from 'react';
import { type,setType, setUsername, setEmployeeId } from '../../storage'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hook/AuthProvider';

// import banner from 'public/images/logo.jpg'
// import google from 'public/images/logo/google.png'
// import pionero from 'public/images/pionero.jpg'
const url = "http://localhost/restful_php_api/api/user/login.php"


function Login() {
  const navigate = useNavigate()
  const [login, setLogin] = useState(false);
  // const {login} = useAuth()
  console.log(type)

  async function check() {
    document.getElementById("noUsername").hidden = true;
    document.getElementById("noPassword").hidden = true;
    var username = document.getElementById("username");
    // alert("username:" + username.value)
    if(username.value === "") {
      document.getElementById("noUsername").hidden = false;
      return false;
    }
    else document.getElementById("noUsername").hidden = true;

    var password = document.getElementById("password");
    if(password.value === "") {
      document.getElementById("noPassword").hidden = false;
      return false;
    }
    else document.getElementById("noPassword").hidden = true;

    ///send data
    const data = (await axios.post(url, {username : username.value, password: password.value})).data
    console.log(data)
    if(data.response === "200"){
      console.log("abc")
      // setEmployeeId(data.employeeId)
      // setUsername(data.username)
      // setType(data.userType)
      localStorage.setItem('type', data.userType)
      localStorage.setItem('username',data.username)
      localStorage.setItem('employeeId', data.employeeId)
      console.log(data.userType)
      console.log(type)
      window.location.reload()
    }
    // console.log(data.employeeId)

  }

//   function handleSignIn(e) {
//     e.preventDefault()
//   }
  return (
    <>
      <div className={styles.container1}><div className = {styles.bound}>
      <header>
        <title>PingDaily</title>
      </header>
      <div className={styles.container}>
        <form action="">
            <h1 >Log in</h1>
        <div className={styles.form_control}>
            <input id="username" type="text" className={styles.username} style={{paddingLeft:"10px", borderRadius: "8px"}} placeholder="Username" />
            <div id="noUsername" className={styles.notShow} hidden={true}>Username is required</div>
            <span></span>
        </div>
        {/* <div className={styles.form_control}>
            <input id="email" type="email" className={styles.email} placeholder="Email" />
            <small>Email is required</small>
            <span></span>
        </div> */}
        <div className={styles.form_control}>
            <input id="password" type="password" className={styles.Password} style={{paddingLeft:"10px", borderRadius: "8px"}} placeholder="Password" />
            <div id="noPassword" className={styles.notShow} hidden={true}>Password is required</div>
            <span></span>
        </div>
        {/* <div className={styles.form_control}>
            <input id="confirm_password" type="password" className={styles.confirm_password} placeholder="Confirm password" />
            <small>Confirm password is required</small>
            <span></span>
        </div> */}

        <button type="button" onClick={check} className={styles.btn_submit}>Login</button>
        <div className={styles.signup_link}>
            Not a member? <a href="/register">Sign up</a>
        </div>
        </form>
    </div>
      </div>
      </div>
    </>
  )
}

export default Login
