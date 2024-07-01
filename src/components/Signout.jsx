import React from 'react'
import { Outlet } from 'react-router-dom'

const Signout = () => {
  return (
    <div>Signout
      <Outlet />
    </div>
  )
}

export default Signout