import React from 'react'
import { useState, useEffect } from 'react';
import AdminNav from './adminnav'
import useRequireAuth from './useRequireAuth';
// Used Reference from react  documentation  and chatgpt

function viewVoterList() {
  useRequireAuth(); 

    const BASE_URL = import.meta.env.VITE_API_URL;
    const [voters, setVoters] = useState([]);

    useEffect(() => {
        // Fetch election data and update state
        fetch(`${BASE_URL}/voter/all`,{
          headers: {
            "Content-Type": "application/json",
            "Authorization" :"Bearer "+localStorage.getItem('token') 
          },
        })
          .then((response) => response.json())
          .then((data) => {
            setVoters(data);
            console.log(data);
          });
      }, []);


  return (
    <>
      <AdminNav/>
      <div className="grid grid-cols-1 mt-60 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                {voters.map(voter => (
                    <div key={voter.voterId} className="bg-red-500 rounded-lg p-4 shadow-md">
                        <h2 className="text-xl font-bold text-white mb-2">{voter.name}</h2>
                        <p className="text-white mb-4">{voter.email}</p>
                        <p className="text-white mb-4">{voter.phone}</p>
                        <p className="text-white mb-4">{voter.address}</p>
                       

                    </div>
                ))}
            </div>


    </>
  )
}

export default viewVoterList