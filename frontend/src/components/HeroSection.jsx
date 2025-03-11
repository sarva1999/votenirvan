
import {Link} from "react-router-dom"
import RegistrationForm from "./registrationForm";
import { useState } from "react";

const HeroSection = () => {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false); 

  const toggleRegistrationForm = () => {
    setShowRegistrationForm(!showRegistrationForm); 
  }

  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
       Voting Management System
        <span className="bg-gradient-to-r from-red-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          for US Citizens
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Fully Online Voting Management System , see the potential of transformation of traditional ,regular obsolete voting system to comfort of your zone with ease of access anywhere.
      </p>
      <div className="flex justify-center my-10">
        <Link
          to="/signup"
          className="bg-gradient-to-r from-red-500 to-red-600 py-3 px-4 mx-3 rounded-md"
        >
          Get Started
        </Link>
        
        {showRegistrationForm && <RegistrationForm onClose={toggleRegistrationForm} />} 

        <Link to="/docs" className="py-3 px-4 mx-3 rounded-md border">
          How to Use?
        </Link>
      </div>
      <div className="flex mt-10 justify-center">
        <img src="/assets/elections.jpeg"
         
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        ></img>
          
        <img
          src="/assets/result.png"
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          </img>
      </div>
    </div>
  );
};

export default HeroSection;
