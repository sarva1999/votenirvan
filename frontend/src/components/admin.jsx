import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useRequireAuth from './useRequireAuth';
import AdminNav from './adminnav';
import Footer from './Footer';
import ModalDanger from './modalDanger';
import {useNavigate} from 'react-router-dom'
function AddCandidates() {
  useRequireAuth(); 

  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setLogoutModalOpen(true);
  };

  const handleCancelLogout = () => {
    setLogoutModalOpen(false);
  };

  const handleConfirmLogout = () => {
    setLogoutModalOpen(false);
    localStorage.removeItem('token');
    navigate('/signin');
    
   
  };

  return (
    <>
      <AdminNav />
      <div className='text-white text-center mt-40 min-h-[250px]'>
        <Link to="/admin/createElection"><button className="bg-red-600 w-[180px] rounded-md font-semibold py-2 my-8 mx-auto">Create Election</button> </Link>
        <Link to="/admin/addCandidates"><button className="bg-red-600 w-[180px] rounded-md font-semibold py-2 my-8 mx-auto">Add Candidates</button> </Link>
        <Link to="/admin/publishResult"><button className="bg-red-600 w-[180px] rounded-md font-semibold py-2 my-8 mx-auto">Publish Result</button> </Link>
        <Link to="/admin/viewVoters"><button className="bg-red-600 w-[180px] rounded-md font-semibold py-2 my-8 mx-auto">Voter List</button> </Link>
        <button className="bg-white text-red-500 w-[180px] rounded-md font-semibold py-2 my-8 mx-auto" onClick={handleLogout}>Logout</button>

        <ModalDanger isOpen={isLogoutModalOpen} onClose={handleCancelLogout} onConfirm={handleConfirmLogout} />
      </div>
      <Footer/>
    </>
  );
}

export default AddCandidates;
