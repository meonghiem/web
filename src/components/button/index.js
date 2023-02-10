
import * as React from 'react'
import './button.css'
// import Styles from './button.module.css'

const Button = ({ children, btnType, ...props}) => {
  return (
    <button type="button" className={`button ${btnType}`} {...props}>
      <b>{children} </b>
    </button>
  )
}

export default Button
