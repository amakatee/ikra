import React from 'react'
import Navbar from './Navbar'

export const Layout = ({children}) => {
  return (
    <section className='user-view'>
        <Navbar fill="#F5F7FA" />
        <div>
            {children}
        </div>
    </section>
  )
}
