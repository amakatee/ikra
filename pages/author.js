import React from 'react'
import { useRouter } from 'next/router'

const author = () => {

    const router = useRouter()
  return (
    <div className='home'>
        <h1 className='auth-title'>Choose your role:</h1>
        <div className="auth-options">
          <div onClick={() => router.push('/user')} className='auth-option'>
              <h1>User</h1>
           </div>
          <div onClick={() => router.push('/creator')} className='auth-option'>
              <h1>Creator</h1>
          </div>
        </div>
    </div>
  )
}

export default author