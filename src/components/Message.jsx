import React from 'react'
import { Outlet } from 'react-router-dom'

const Message = () => {
  return (
    <div>Message
      <Outlet />
    </div>
  )
}

export default Message