import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
        <p>No URL available </p>
        <Link to={"/"}>Click me to go back to home page</Link>
    </div>
  )
}

export default Page404