import React from 'react'
import { Outlet } from 'react-router-dom'

const Favourite = () => {
  return (
    <div>Favourite
      <Outlet />
    </div>
  )
}

export default Favourite