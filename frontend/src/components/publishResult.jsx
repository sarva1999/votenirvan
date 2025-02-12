import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useRequireAuth from './useRequireAuth';
import AdminNav from './adminnav';
import Footer from './Footer';

function publishResult() {
  useRequireAuth(); 
    const BASE_URL = import.meta.env.VITE_API_URL;

    const [elections, setElections] = useState([]);
    const [candidates, setCandidates] = useState([]);
 

    
    
    useEffect(() => {
      // Fetch election data and update state
      fetch(`${BASE_URL}/election`,{
        
        headers: {
          'Content-Type': 'application/json',
          "Authorization" :"Bearer "+localStorage.getItem('token'),

          
      }




      })
        .then((response) => response.json())
        .then((data) => {
          setElections(data);
        });
    }, []);
    


  async  function publishResult(electionId) {
      // Perform publish result logic here
      fetch(`${BASE_URL}/election/${electionId}?active=${false}`, {
      
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          "Authorization" :"Bearer "+localStorage.getItem('token'),

          
      }
      })
        .then((response) => response.text())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });

      // candidates fetched for gettign max votes in election 
      try {
          const response = await fetch(`${BASE_URL}/candidate/byElectionId?election_id=${electionId}`);
          const data = await response.json();
          setCandidates(data);
          console.log('Candidates:', data);

          // Extract candidate IDs
          const candidateIds = data.map(candidate => candidate.candidate_id);
          console.log('Candidate IDs:', candidateIds);

          // Send POST request with candidate IDs
          const postResponse = await fetch(`${BASE_URL}/vote/votes?election_id=${electionId}`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  "Authorization" :"Bearer "+localStorage.getItem('token'),

                  
              },
              body: JSON.stringify(candidateIds)
          });
          const winnerId = await postResponse.text();
          console.log('POST Response:', parseInt(winnerId));

          const resultResponse = await fetch(`${BASE_URL}/result`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  "Authorization" :"Bearer "+localStorage.getItem('token')
              },
              body: JSON.stringify({
                  electionId: electionId,
                  candidateId: parseInt(winnerId)
              })
          });
          const resultData = await resultResponse.text();
          console.log('Result Response:', resultData);

          console.log('Result published successfully!' + electionId);
          toast.success("Result Published Successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
   } catch (error) {
        
          console.error(error);
      }
    }
  
  
    return (
<>
<AdminNav/>
<ToastContainer/>
        <div className="bg-black w-full min-h-screen gap-4 flex-wrap flex justify-center items-center">
            {elections.map((election, index) => (
                <div key={index} className="w-45 p-2 bg-red-600 rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                    <img
                        className="h-40 object-cover rounded-xl"
                        src="../../../public/logos/electioncard.jpg"
                        alt=""
                    />
                    <div className="p-2">
                        <h2 className="font-bold text-white text-lg mb-2">{election.active}</h2>
                        <p className="text-sm text-white">{election.electionName}</p>
                    </div>
                    <div className="m-2">
                        {election.active ? (
                            <Link
                                role="button"
                                className="text-red-600 bg-white px-3 py-1 rounded-md hover:bg-red-500 hover:text-white"

                                onClick={()=>publishResult(election.election_id)}

                            >
                               Publish Result
                            </Link>
                        ) : (
                            <span className="text-gray-400 bg-gray-700 px-3 py-1 rounded-md cursor-not-allowed">
                Election Closed
              </span>
                        )}
                    </div>
                </div>
            ))}
        </div>
        <Footer/>
        </>
    );

  
}

export default publishResult


