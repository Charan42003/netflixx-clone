import React from 'react'
import { Outlet } from 'react-router-dom'


function RoutLayout() {

  return (
    <>    
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default RoutLayout