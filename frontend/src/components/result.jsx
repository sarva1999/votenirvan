import React, { useEffect, useState } from 'react';
import NavBar from './navbarNoRegister';
import Footer from './Footer'
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";


function Result() {
    const BASE_URL = import.meta.env.VITE_API_URL;
    const [results, setResults] = useState([]);

    useEffect(() => {
        // Fetch election data and update state
        fetch(`${BASE_URL}/result`)
             
            .then((response) => response.json())
            .then((data) => {
                setResults(data);
                console.log(data);
            });
    }, []);

    return (
        <>
      
            <NavBar />
            <h2 className='text-red-500 font-extrabold text-center text-4xl sm:text-3xl'>Results </h2>

            {/* {results.map((result, index) => (
        <div key={index} className="w-40 mt-40 p-2 bg-red-600 rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
        <img
          className="h-40 object-cover rounded-xl"
          src="/logos/result.jpg"
          alt=""
        />
        <div className="p-2">
          <p className="text-3xl font-extrabold text-white">{result.electionName}</p>
          <p className="text-3xl font-bold text-black">{result.candidate.name}</p>
          <p className="text-3xl font-semibold text-white">{result.candidate.party}</p>
        </div>
        <div className="m-2">
          
        
        </div>
      </div>
 
))} */}
{/* 
{results.map((result, index) => (
<Card className="bg-gray-800 py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{result.electionName}</p>
        <small className="text-default-500">{result.candidate.name}</small>
        <h4 className="font-bold text-large">{result.candidate.party}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={`data:image/jpeg;base64,${result.candidate.image}`}
          width={200}
        />
      </CardBody>
    </Card>
     ))} */}


{results.map((result, index) => (
<div className="bg-red-700  rounded-lg mt-40 p-5 flex flex-col gap-4 w-full max-w-sm items-center">
      <h3 className="text-lg font-bold text-gray-100">{result.electionName}</h3>
      <div className="flex flex-col gap-1 items-center">
        <div className="flex gap-4 items-center">
          <img
            alt="Candidate"
            className="rounded-full"
            height={80}
            src={`data:image/jpeg;base64,${result.candidate.image}`}
            style={{
              aspectRatio: "80/80",
              objectFit: "cover",
            }}
            width={80}
          />
          <div className="flex flex-col">
            <h4 className="font-semibold  text-xl">{result.candidate.name}</h4>
            <p className="text-sm text-gray-300">{result.candidate.party}</p>
          </div>
        </div>
      </div>
    </div>
    ))}





  <div className="flex min-h-screen items-center justify-center">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-black shadow-md rounded-xl">
          <thead>
            <tr className="bg-black border-red-500 text-black">
              <th className="py-3 text-4xl px-4 bg-green-500 text-black text-left">Election Name</th>
              <th className="py-3 text-4xl px-4 bg-green-500 text-black  text-left">Candidate Name</th>
              <th className="py-3  text-4xl px-4 bg-green-500 text-black text-left">Party</th>
              {/* <th className="py-3 px-4 bg-yellow-500 text-black text-left">Votes</th> */}
              {/* <th className="py-3 px-4 text-left">Action</th> */}
            </tr>
          </thead>
          <tbody className="text-blue-gray-900">
          {results.map((result, index) => (
                            <tr key={index} className="border-b border-black">
                                <td className=" text-3xl py-3 px-4 bg-green-500 font-bold text-black ">{result.electionName}</td>
                                <td className="py-3 text-3xl px-4 bg-green-500 font-bold text-black" >{result.candidate.name}</td>
                                <td className="py-3 text-3xl px-4 bg-green-500 font-bold  text-black" >{result.candidate.party}</td>
                            </tr>
                        ))}
     
       
   
          </tbody>
        </table>
       
      </div>
    </div>





<Footer/>
        </>
    );
}

export default Result;
