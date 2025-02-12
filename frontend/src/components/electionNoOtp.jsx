import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ElectionDetails() {
    const BASE_URL = import.meta.env.VITE_API_URL;

    const { election_id } = useParams();

    const [candidates, setCandidates] = useState([]);
    const [voterId, setVoterId] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        // Fetch election data and update state
        fetch(`${BASE_URL}/candidate/byElectionId?election_id=${election_id}`)
            .then((response) => response.json())
            .then((data) => {
                setCandidates(data);
                console.log(data);
            });
    }, [])

    function handleVote() {
        setShowModal(true);
    }

    function handleSendOTP() {
        // Send OTP request to backend
        fetch(`${BASE_URL}/send-otp`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                voterId: voterId,
                phoneNumber: phoneNumber
            })
        })
            .then(response => response.json())
            .then(data => {
                // Handle response, show success or error message
                console.log('OTP sent:', data);
            })
            .catch(error => {
                console.error('Error sending OTP:', error);
            });
    }

    return (
        <div className="flex flex-col items-center space-y-8 mt-8">
            <h1 className="text-4xl font-bold text-white"></h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                {candidates.map(candidate => (
                    <div key={candidate.id} className="bg-red-500 rounded-lg p-4 shadow-md">
                        <h2 className="text-xl font-bold text-white mb-2">{candidate.name}</h2>
                        <p className="text-white mb-4">{candidate.party}</p>
                        <button className="bg-white text-red-500 px-4 py-2 rounded font-bold" onClick={handleVote}>Vote</button>
                    </div>
                ))}
            </div>

            {showModal && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>

                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">Enter Voter ID and Phone Number</h3>
                                        <div className="mt-2">
                                            <input type="text" placeholder="Enter Voter ID" value={voterId} onChange={e => setVoterId(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                        </div>
                                        <div className="mt-2">
                                            <input type="text" placeholder="Enter Phone Number" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button onClick={handleSendOTP} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                                    Send OTP
                                </button>
                                <button onClick={() => setShowModal(false)} type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ElectionDetails;
