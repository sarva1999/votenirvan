import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import AdminNav from './adminnav';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useRequireAuth from './useRequireAuth';
import Footer from './Footer'

// Used Reference from react  documentation and from chatgpt


function CreateElection() {
  useRequireAuth(); 
  const BASE_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const [name, setElectionName] = useState('');

  function handleElection(e) {
    e.preventDefault();


    if (name.trim() === '') {
      toast.error("Please enter the election title.", {
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

    fetch(`${BASE_URL}/election`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization" :"Bearer "+localStorage.getItem('token') 
      },
      body: JSON.stringify({
        electionName: name,
        active: true
      }),
    })
    .then((res) => res.text())
    .then((data) => {
      toast.success("Election Created Successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      console.log(data);
      setTimeout(() => {
        navigate("/admin/addCandidates");
      }, 3000);
    })
    .catch((err) => {
      console.log(err);
      toast.error("Failed to create election.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    });
  }

  return (
    <>
      <AdminNav />
      <ToastContainer />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-red-500">
            Creating Election
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-red-600">
                Election Title
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => setElectionName(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={handleElection}
              >
                Create Election
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default CreateElection;
