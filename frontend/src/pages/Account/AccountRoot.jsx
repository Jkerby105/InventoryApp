import React from 'react'
import { AccountNav } from '../../components/AccountNav'
import { Footer } from '../../components/Footer'
import { Outlet } from 'react-router-dom'

export const AccountRoot = () => {
  return (
    <>
      <AccountNav/>
       <Outlet/>
      <Footer/>
    </>
    
  )
}
