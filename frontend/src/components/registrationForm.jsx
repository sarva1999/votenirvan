// RegistrationForm.js
import React from 'react';
import SignUp from './signup';
const RegistrationForm = ({ onClose }) => {
  return (
    <div  style={{ height: '100vh', overflowY: 'auto' }} className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-black p-8 rounded-lg">
        <button onClick={onClose} className="absolute text-4xl top-2 right-2 text-red-500">&times;</button>
        <SignUp/>

      </div>
    </div>
  );
};

export default RegistrationForm;
