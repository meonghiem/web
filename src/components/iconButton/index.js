import React from 'react'
import Button from '../button'

const IconButton = ({children, icon }) => {
  return (
    <Button>
      <img src={icon} alt="Twitter" />
      <div className="text-TextOnS text-center font-medium text-xl  w-full">
        {children}
      </div>
    </Button>
  )
}

export default IconButton