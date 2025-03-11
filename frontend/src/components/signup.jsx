import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from "./Navbar";
import { aadhar } from "@ashwinbande/validators";
import { mobile } from '@ashwinbande/validators';
import { Validator, Regex } from 'valiy';
import Footer from './Footer';
import { isValid as isValidSSN }  from 'ssn-validator'
import { getMatches, isValid as isValidDL } from 'driver-license-validator';


export default function SignUp() {
  const navigate = useNavigate();
  const voter_url = import.meta.env.VITE_API_URL;
  // const otp_url = import.meta.env.VITE_OTP_API_URL;

  const [showModal, setShowModal] = useState(false);
  const [otp, setOtp] = useState('');
  
  const [aadharNumber, setAadharNumber] = useState('');
  const [isValidAadhar, setIsValidAadhar] = useState(false);
  const [voterNumber, setVoterNumber] = useState('');
  const [isValidVoter, setIsValidVoter] = useState(false);
  const [fullName, setFullName] = useState('');
  const [isValidName, setIsValidName] = useState(false);
  const [phoneNo, setPhoneNo] = useState('');
  const [isValidPhone, setIsValidPhone] = useState(false);
  const [emailAddress, setEmailAddress] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [address, setAddress] = useState('');

  const handlePhone = (e) => {
    const inputValue = e.target.value;
    setPhoneNo(inputValue);
    setIsValidPhone(inputValue === '' ? false : mobile(inputValue));
  };

  const handleAadharChange = (e) => {
    const inputValue = e.target.value;
    setAadharNumber(inputValue);
    setIsValidAadhar(inputValue === '' ? false : isValidSSN(inputValue));
  };

  const handleVoterChange = (e) => {
    const inputValue = e.target.value;
    setVoterNumber(inputValue);
    setIsValidVoter(inputValue === '' ? false : isValidDL(inputValue));
  };

  const handleFullName = (e) => {
    const inputValue = e.target.value;
    setFullName(inputValue);
    setIsValidName(inputValue === '' ? false : Validator.validateFullname(inputValue));
  };

  const handleEmailAddress = (e) => {
    const inputValue = e.target.value;
    setEmailAddress(inputValue);
    setIsValidEmail(inputValue === '' ? false : Validator.validateEmail(inputValue));
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (!isValidAadhar || !isValidVoter || !isValidName || !isValidPhone || !isValidEmail || address.trim() === '') {
      toast.error("Please fill in all fields correctly.", {
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

    handleSendOTP();
  };

  const handleSendOTP = () => {
    fetch(`${voter_url}/otp/sendOTP`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        voterId:voterNumber,
        phoneNumber: "+1"+ phoneNo,

      }),
    })
      .then((res) => res.text())
      .then((data) => {
        // Show success toast message
        toast.success("OTP sent successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setShowModal(true);
      })
      .catch((err) => {
        console.log(err);
        // Show error toast message
        toast.error("Failed to send OTP.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };

  const handleOtpVerification = () => {
    fetch(`${voter_url}/otp/validateOTP`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        voterId: voterNumber,
        otp: otp,
      }),
    })
      .then((res) => res.text())
      .then((data) => {
        if (data === "Valid Otp") {
          // Show success toast message
          fetch(`${voter_url}/voter`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              voterId: voterNumber,
              aadharNumber: aadharNumber,
              email: emailAddress,
              name: fullName,
              phoneNo: phoneNo,
              address: address,
            }),
          })
          toast.success("OTP verified! Registration successful!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });


          // Redirect after 3 seconds
          setTimeout(() => {
            navigate("/elections");
          }, 3000);
        } else {
          // Show error toast message
          toast.error("Invalid OTP. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          // Clear OTP field
          setOtp('');
        }
      })
      .catch((err) => {
        console.log(err);
        // Show error toast message
        toast.error("Failed to verify OTP.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };

  return (
    <>
      <ToastContainer />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-red-500">
            Register your account 
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-red-600">
                Full Name 
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="name"
                  autoComplete="name"
                  required
                  value={fullName}
                  placeHolder="Enter your Full Name as Per Passport"
                  onChange={handleFullName}
                  className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                />
                {fullName !== '' && (
                  isValidName ? (
                    <span className="text-sm text-green-500">Valid Name</span>
                  ) : (
                    <span className="text-sm text-red-500">Invalid Name</span>
                  )
                )}
              </div>
            </div>

            <div>
              <label htmlFor="voterid" className="block text-sm font-medium leading-6 text-red-600">
                  Driver License ID
              </label>
              <div className="mt-2">
                <input
                  id="voterid"
                  name="voterid"
                  type="text"
                  autoComplete="voterid"
                  required
                  placeHolder='Enter your Driver License ID '
                  value={voterNumber}
                  onChange={handleVoterChange}
                  className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                />
                {voterNumber !== '' && (
                  isValidVoter ? (
                    <span className="text-sm text-green-500">Valid Driver License Id</span>
                  ) : (
                    <span className="text-sm text-red-500">Invalid Driver License Id</span>
                  )
                )}
              </div>
            </div>

            <div>
              <label htmlFor="aadhar" className="block text-sm font-medium leading-6 text-red-600">
                SSN Number 
              </label>
              <div className="mt-2">
                <input
                  id="aadhar"
                  name="aadhar"
                  type="string"
                  autoComplete="aadhar"
                  required
                  placeHolder='Enter your SSN Number'
                  value={aadharNumber}
                  onChange={handleAadharChange}
                  className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                />
                {aadharNumber !== '' && (
                  isValidAadhar ? (
                    <span className="text-sm text-green-500">Valid SSN Number</span>
                  ) : (
                    <span className="text-sm text-red-500">Invalid SSN Number</span>
                  )
                )}
              </div>
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium leading-6 text-red-600">
                Address
              </label>
              <div className="mt-2">
                <input
                  id="address"
                  name="address"
                  type="text"
                  placeHolder="Enter the Address as Per Passport or Driver License"
                  autoComplete="address"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phoneno" className="block text-sm font-medium leading-6 text-red-600">
                Phone Number 
              </label>
              <div className="mt-2">
                <input
                  id="phoneno"
                  name="phoneno"
                  type="tel"
                  autoComplete="phoneno" 
                  required
                  value={phoneNo}
                  placeHolder='Enter your Phone Number '
                  onChange={handlePhone}
                  className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                />
                {phoneNo !== '' && (
                  isValidPhone ? (
                    <span className="text-sm text-green-500">Valid Phone Number</span>
                  ) : (
                    <span className="text-sm text-red-500">Invalid Phone Number</span>
                  )
                )}
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-red-600">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeHolder="Enter your Email Address"
                  value={emailAddress}
                  onChange={handleEmailAddress}
                  className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                />
              </div>
              {emailAddress !== '' && (
                isValidEmail ? (
                  <span className="text-sm text-green-500">Valid Email</span>
                ) : (
                  <span className="text-sm text-red-500">Invalid  Email</span>
                )
              )}
            </div>

            <div>
              <button
                type="submit"
                className={`flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${!(isValidAadhar && isValidVoter && isValidName && isValidPhone && isValidEmail) && 'opacity-50 cursor-not-allowed'}`}
                onClick={handleRegister}
                disabled={!(isValidAadhar && isValidVoter && isValidName && isValidPhone && isValidEmail)}
              >
                Register 
              </button>
            </div>
          </form>
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
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Enter OTP</h3>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="otp"
                            id="otp"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            className="shadow-sm focus:ring-red-500 focus:border-red-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            placeholder="Enter OTP"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      onClick={handleOtpVerification}
                      type="button"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Verify
                    </button>
                    <button
                      onClick={() => setShowModal(false)}
                      type="button"
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:w-auto sm:text-sm"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          

        </div>
      </div>
    </>
  );
}
