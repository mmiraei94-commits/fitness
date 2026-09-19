import React from 'react'
import { Outlet } from 'react-router'

const SignLayout = () => {
  return (
    <section>
      <Outlet/>
    </section>
  )
}

export default SignLayout