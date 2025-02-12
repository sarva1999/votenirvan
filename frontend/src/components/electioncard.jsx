import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const BASE_URL = import.meta.env.VITE_API_URL;

function ElectionCard() {
  const [elections, setElections] = useState([]);

  useEffect(() => {
    // Fetch election data and update state
    fetch(`${BASE_URL}/election`)
      .then((response) => response.json())
      .then((data) => {
        setElections(data);
      });
  }, []);
  

  return (
    <>
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
            <p className="text-lg font-bold text-white">{election.electionName}</p>
          </div>
          <div className="m-2">
            {election.active ? (
              <Link
                role="button"
                className="text-red-600 bg-white px-3 py-1 rounded-md hover:bg-red-500 hover:text-white"
                to={`/electionDetails/${election.election_id}`}
              >
                Vote Now
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
    </>
  );
}

export default ElectionCard;
