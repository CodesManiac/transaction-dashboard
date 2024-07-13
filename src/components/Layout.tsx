import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import ProfileHeader from './ProfileHeader'
import Header from './Header'

const Layout = () => {
  return (
    <div className=" overflow-hidden h-screen flex">
      <div className='hidden md:block w-[260px] h-full'>
      <Sidebar />
      </div>
      <div className="w-full md:w-[100vw-260px] overflow-auto bg-[#F8F8F8] px-6 py-4">
        <div className=' md:hidden'>
          <Header/>
        </div>
        <ProfileHeader/>
        <Outlet/>
      </div>
    </div>

  )
}

export default Layout
