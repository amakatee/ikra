import React from 'react'
import Logo from './Logo'

const Navbar = ({fill}) => {
  return (
    <div className='nav'>
        <Logo fill={fill} />
    </div>
  )
}

export default Navbar