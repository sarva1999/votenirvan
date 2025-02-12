import React from 'react';
import NavBar from './navbarNoRegister';
import MeetOurTeam from './meetourteam';
import Footer from './Footer'

function About() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 md:py-16">
        <h1 className="text-red-600 text-center font-extrabold text-3xl md:text-4xl lg:text-5xl mb-8">About Online Voting</h1>
        <p className="text-white max-w-xl text-lg md:text-xl font-semibold text-center leading-relaxed">
          Welcome to our <span className="text-blue-700">online voting platform</span> revolutionizing the way we participate in the democratic process. Online voting presents <span className="text-yellow-400">a modern and efficient approach to casting your vote</span> offering several advantages over traditional voting methods.
        </p>
      </div>
      <MeetOurTeam />
      <Footer/>
    </>
  );
}

export default About;
