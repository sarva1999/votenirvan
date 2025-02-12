import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SignIn from './components/signin.jsx'
import SignUp from './components/signup.jsx'
import Elections from './components/elections.jsx'
import ElectionDetails from './components/electionDetails.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import CreateElection from './components/createElection.jsx';
import Admin from './components/admin.jsx';
import AddCandidates from './components/addCandidates.jsx'
import Result from './components/result.jsx';
import About from './components/about.jsx';
import ViewVoterList from './components/viewVoterList.jsx';
import PublishResult from './components/publishResult.jsx'
import Docs from "./components/docs.jsx"
import OtpTesting from "./components/otpTesting.jsx"
import NotFound from './components/notfound.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<NotFound/>
  },
  {
    path: "/signin",
    element: <SignIn/>,
    errorElement:<NotFound/>
  }, {
    path: "/signup",
    element: <SignUp/>,
    errorElement:<NotFound/>
  },{
    path: "/elections",
    element:<Elections/>,
    errorElement:<NotFound/>
  },{
    path:"/electionDetails/:election_id",
    element:<ElectionDetails/>,
    errorElement:<NotFound/>
  },
  {
    path:"/admin",
    element:<Admin/>,
    errorElement:<NotFound/>
  },
  {
    path:"/admin/createElection",
    element:<CreateElection/>,
    errorElement:<NotFound/>
  },
  {
    path:"/admin/addCandidates",
    element:<AddCandidates/>,
    errorElement:<NotFound/>
  },
  {
    path:"/results",
    element:<Result/>,
    errorElement:<NotFound/>
  },
  {
    path:"/about",
    element:<About/>,
    errorElement:<NotFound/>
  },
  {
    path:"/admin/viewVoters",
    element:<ViewVoterList/>,
    errorElement:<NotFound/>
  },
  {
    path:"/admin/publishResult",
    element:<PublishResult/>,
    errorElement:<NotFound/>
  },
  {
    path:"/docs",
    element:<Docs/>,
    errorElement:<NotFound/>
  },
  {
    path:"/testingOtp",
    element:<OtpTesting/>
  }

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
