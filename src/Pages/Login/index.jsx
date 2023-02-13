
// import { signIn } from 'next-auth/react'
import React from 'react'
import styles from './Login.module.css'
import { useState } from 'react';
import { setType, type } from '../../storage'
import axios from 'axios';
import Router from '../../Navigation/router';
// import { Route, Router } from 'react-router-dom';

// import banner from 'public/images/logo.jpg'
// import google from 'public/images/logo/google.png'
// import pionero from 'public/images/pionero.jpg'
const url = "api/account/show.php"


function Login() {

  const [login, setLogin] = useState(false);

  function check() {
    var noUser = document.getElementById("noUsername");
    var noPassword = document.getElementById("noPassword")
    noUser.hidden = true;
    noPassword.hidden = true;
    
    var username = document.getElementById("username");
    if(username.value === "") {
      noUser.hidden = false;
      return false;
    }
    else noUser.hidden = true;

    var password = document.getElementById("password");
    if(password.value === "") {
      noPassword.hidden = false;
      return false;
    }
    else noPassword.hidden = true;

    ///send data
    axios.post(url, {
      username: username, 
      password: password
    })
    .then(res => {
      if(res.type !== "none") {
        setType(res.type)
        setLogin(res.type)
      }
    })
    .catch(error => console.log(error))
  }

  function Done() {
    setType("user");
    console.log(type);
    setLogin(true);
    // return (<Router></Router>)
    localStorage.setItem("type", "user");
    window.location.reload();
  }

//   function handleSignIn(e) {
//     e.preventDefault()
//   }
  return (
    <>
      <div className = {styles.bound}>
      <header>
        <title>PingDaily</title>
      </header>
      <div className={styles.container}>
        <form action="">
            <h1 >Log in</h1>
        <div className={styles.form_control}>
            <input id="username" type="text" className={styles.username} placeholder="Username" />
            <div id="noUsername" className={styles.notShow} hidden={true}>Username is required</div>
            <span></span>
        </div>
        {/* <div className={styles.form_control}>
            <input id="email" type="email" className={styles.email} placeholder="Email" />
            <small>Email is required</small>
            <span></span>
        </div> */}
        <div className={styles.form_control}>
            <input id="password" type="password" className={styles.Password} placeholder="Password" />
            <div id="noPassword" className={styles.notShow} hidden={true}>Password is required</div>
            <span></span>
        </div>
        {/* <div className={styles.form_control}>
            <input id="confirm_password" type="password" className={styles.confirm_password} placeholder="Confirm password" />
            <small>Confirm password is required</small>
            <span></span>
        </div> */}

        <button type="button" onClick={Done} className={styles.btn_submit}>Login</button>
        <div className={styles.signup_link}>
            Not a member? <a href="/signup">Sign up</a>
        </div>
        </form>
    </div>
      </div>
    </>
  )
}

export default Login
