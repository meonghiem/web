
import * as React from 'react'
import './button.css'
// import Styles from './button.module.css'

const Button = ({ children}) => {
  return (
    <button type="button" className="button">
      {children}
    </button>
  )
}

export default Button
