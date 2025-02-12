import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "/assets/logo.png";
import { navItems } from "../constants";
import {Link} from 'react-router-dom';

const AdminNav = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            {/* <img className="h-10 w-10 mr-2" src={logo} alt="Logo" /> */}
            <span className="text-xl tracking-tight"><Link to="/" >Vote Nirvan</Link></span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
           <Link to="/">Home</Link>
           <Link to="/admin">Admin</Link>
           <Link to="/about">About</Link>
          </ul>
         
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                <Link to={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              {/* <a href="#" className="py-2 px-3 border rounded-md">
                Sign In
              </a> */}
              <Link
                to="/signup"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-red-500 to-red-600"
              >
                Create an account
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default AdminNav;
