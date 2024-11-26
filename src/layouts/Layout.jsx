import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Fooder from '../components/Fooder'

const Layout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Fooder/>
    </div>
  )
}

export default Layout