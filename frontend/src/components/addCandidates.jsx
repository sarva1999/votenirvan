import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import AdminNav from './adminnav';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useRequireAuth from './useRequireAuth';
import Footer from './Footer'


function AddCandidates() {
  useRequireAuth(); 

  const BASE_URL=import.meta.env.VITE_API_URL
  
  const [elections, setElections] = useState([]);
  const [election_id, setElectionId] = useState(''); 
  const [candidateName, setCandidateName] = useState(''); 
  const [candidateParty, setCandidateParty] = useState(''); 
  const [selectedImage, setSelectedImage] = useState(null);


  useEffect(() => {
    fetch(`${BASE_URL}/election`)
      .then((response) => response.json())
      .then((data) => {
        setElections(data);
      });
  }, []);

  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
};

const handleRemoveImage = () => {
    setSelectedImage(null);
};

  
  function handleCandidates(e){
    e.preventDefault(); 

    if (!election_id) {
      toast.error("Please select an election.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(selectedImage);
    reader.onloadend = function () {
      const base64Image = reader.result.split(",")[1];  
      // Prepare the candidate data including the base64 image
      const candidateData = {
        election_id: election_id,
        name: candidateName,
        party: candidateParty,
        image: base64Image
      };
    

    if (!/^[a-zA-Z ]+$/.test(candidateName)) {
      toast.error("Candidate name should contain only letters.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    if (!/^[a-zA-Z ]+$/.test(candidateParty)) {
      toast.error("Candidate party should contain only letters.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
    
    fetch(`${BASE_URL}/candidate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization" :"Bearer "+localStorage.getItem('token')
        },
        body: JSON.stringify(candidateData),
      })
        .then((res) => res.text())
        .then((data) => {
          console.log(data);
          toast.success("Candidate Added Successfully :)", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        })
        .catch((err) => {
          toast.error("Something Went Wrong !!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          console.log(err);
        });
      };
  }
  
  return (
    <>
      <AdminNav/>
      <ToastContainer/>
      <div>
        <div className="flex min-h-full flex-1 flex-col justify-start px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-red-500">
               Adding Candidates 
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="election_id" className="block text-sm font-medium leading-6 text-red-600">
                  Select Election
                </label>
                <div className="mt-2">
                  <select
                    id="election_id"
                    name="election_id"
                    value={election_id}
                    onChange={(e) => setElectionId(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                  >
                    <option value="">Select Election</option>
                    {elections.map((election) => (
                      <option key={election.election_id} value={election.election_id}>{election.electionName}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="candidateName" className="block text-sm font-medium leading-6 text-red-600">
                  Candidate Name
                </label>
                <div className="mt-2">
                  <input
                    id="candidateName"
                    name="candidateName"
                    type="text"
                    autoComplete="candidateName"
                    required
                    value={candidateName}
                    onChange={(e) => setCandidateName(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="candidateParty" className="block text-sm font-medium leading-6 text-red-600">
                  Candidate Party
                </label>
                <div className="mt-2">
                  <input
                    id="candidateParty"
                    name="candidateParty"
                    type="text"
                    autoComplete="candidateParty"
                    required
                    value={candidateParty}
                    onChange={(e) => setCandidateParty(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
           
                <div className="rounded-l-lg p-4 bg-black  flex flex-col justify-center items-center border-0 border-r border-gray-300">
                    <label 
                        className="cursor-pointer hover:opacity-80 inline-flex items-center shadow-md my-2 px-2 py-2 bg-gray-900 text-red-500 border border-transparent
                        rounded-md font-semibold text-xs uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none 
                        focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150" 
                        htmlFor="restaurantImage">
                        Select image
                        <input 
                            id="restaurantImage" 
                            className="text-sm cursor-pointer w-36 hidden" 
                            type="file" 
                            onChange={handleImageChange} 
                        />
                    </label>
              
                </div>
                <div 
                    className="relative order-first md:order-last h-28 md:h-auto flex justify-center items-center border border-dashed border-gray-400 col-span-2 m-2 rounded-lg bg-no-repeat bg-center bg-origin-padding bg-cover"
                >
                    {selectedImage ? (
                        <img 
                            src={URL.createObjectURL(selectedImage)} 
                            alt="Selected" 
                            className="w-full h-full object-cover rounded-lg"
                        />
                    ) : (
                        <span className="text-gray-400 opacity-75">
                            <svg className="w-14 h-14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="0.7" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                        </span>
                    )}
             
        </div>
              
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={handleCandidates}
                >
                  Add Candidate
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
  
      {/* <div className=" bg-black w-full  gap-2 flex-wrap flex justify-center items-center">
        {elections.map((election, index) => (
          <div  key={index}className="w-60 p-2 bg-red-600 rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
            <div className="p-2">
              <h2 className="font-bold text-white text-lg mb-2 ">{election.active}</h2>
              <p className="text-sm text-white">Election_Id : {election.election_id}</p>
              <p className="text-sm text-white">Election_Name: {election.electionName}</p>
            </div>
          </div>
        ))}
      </div> */}
      
      <Footer/>
      
    </>
  );
}
  
export default AddCandidates;
