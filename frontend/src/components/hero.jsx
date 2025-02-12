import React from "react";
import { render } from "react-dom";
import { ReactTyped } from "react-typed";
import SignUp from "./signin";
import { useState } from "react";
import { Link } from "react-router-dom";

function hero() {

  
 
  return (
    <div className="text-white  max-w-[800]  mt-[96px] w-full h-full flex flex-col text-center">
 
      <p className="text-white font-semibold md:text-5xl sm:text-4xl text-3xl p-2">
       All in one platform to register and vote .
     
      </p>
      <ReactTyped className="text-red-600 font-extrabold"
          strings={["Use You Rights as Voter", "Choose", "Vote", "Become an Proud Citizen"]}
          typeSpeed={50} 
          backSpeed={30}
          loop
        />
      {/* <ul>
        <li>🚀 Comprehensive study materials</li>
        <li>📚 Interactive flashcards</li>
        <li>🗒️ Detailed notes</li>
        <li>💡 Practical coding challenges</li>
      </ul> */}
      {/* <p>Start your Voting Digitally !!</p> */}
  <Link to="/signin"><button className="bg-red-600 w-[180px] rounded-md font-semibold py-2 my-8 mx-auto">Get Started</button> </Link>  
    
    
    </div>
  );
}


export default hero
