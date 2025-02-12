import React from 'react';
import {Link} from 'react-router-dom'
function NotFound() {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h2 className='text-center text-5xl font-extrabold text-red-500 '>404 Not Found</h2>
      <blockquote className='text-center text-gray-200 mt-30'>Confused Why you are here? Let's go back</blockquote>
      <Link to="/" ><button className='bg-red-600 w-[180px] rounded-md font-semibold py-2 my-8'>Take Me Home</button></Link>
    </div>
  );
}

export default NotFound;
