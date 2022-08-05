import React from 'react'
import Link from 'next/link'

const author = () => {

 
  return (
    <div className='home'>
        <h1 className='auth-title'>Choose your role:</h1>
        <div className="auth-options">
            <Link href='/user'>
              <div className='auth-option'>
               <h1>User</h1>
              </div>
           </Link>
           <Link href='/creator'>
             <div  className='auth-option'>
               <h1>Creator</h1>
            </div>
          </Link>
        </div>
    </div>
  )
}

export default author