
// import { signIn } from 'next-auth/react'
import React from 'react'
import styles from './Login.module.css'

// import banner from 'public/images/logo.jpg'
// import google from 'public/images/logo/google.png'
// import pionero from 'public/images/pionero.jpg'



function Login() {

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
            <h1>Register</h1>
        <div className={styles.form_control}>
            <input id="username" type="text" className={styles.username} placeholder="Username" />
            <small className={styles.notShow}>Username is required</small>
            <span></span>
        </div>
        <div className={styles.form_control}>
            <input id="email" type="email" className={styles.email} placeholder="Email" />
            <small>Email is required</small>
            <span></span>
        </div>
        <div className={styles.form_control}>
            <input id="password" type="password" className={styles.Password} placeholder="Password" />
            <small>Password is required</small>
            <span></span>
        </div>
        <div className={styles.form_control}>
            <input id="confirm_password" type="password" className={styles.confirm_password} placeholder="Confirm password" />
            <small>Confirm password is required</small>
            <span></span>
        </div>

        <button type="submit" className={styles.btn_submit}>Register</button>
        <div className={styles.signup_link}>
            Not a member? <a href="#">Sign up</a>
        </div>
        </form>
    </div>
      </div>
    </>
  )
}
export default Login
