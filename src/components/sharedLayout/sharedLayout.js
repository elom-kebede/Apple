import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import { Outlet } from 'react-router-dom'

function sharedLayout() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default sharedLayout
