import React from 'react'

import { Outlet } from 'react-router-dom';
import { UserNav } from '../../components/UserNav';
import { Footer } from '../../components/Footer';

export const UserRoot = () => {
  return (
    <>
    <UserNav/>
    {/* <div>UserRoot</div> */}
    <Outlet/>
    {/* <Footer/> */}
    </>
  )
}
