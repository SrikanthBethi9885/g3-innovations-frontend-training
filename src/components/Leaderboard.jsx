import React from 'react'
import { Outlet } from 'react-router-dom'

const Leaderboard = () => {
  return (
    <div>Leaderboard
      <Outlet />
    </div>
  )
}

export default Leaderboard