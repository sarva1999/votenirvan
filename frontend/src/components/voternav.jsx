import React from 'react'
import { Link } from 'react-router-dom'
function voterNav() {
  return (
   <>
     <div className='flex justify-between items-end h-24 max-w-[1240px] mx-auto px-4'>
       <Link to="/" ><h2 className=' w-full text-3xl font-extrabold  text-red-600 '>Voting Management</h2></Link>
       <ul className='text-white  md:flex hidden'>
       <li className='p-4'><Link to="/">Home</Link></li>
        <li className='p-4'><Link to="/results">Results</Link></li>
        <li className='p-4'><Link to="/about">About</Link></li>

\        </ul>
        </div>
   </>
  )
}

export default voterNav