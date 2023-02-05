import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Navbar, Sidebar } from './components';


import { CampaignDetails, CreateCampaign, Home, Profile } from './pages';


const App = () => {
  return (
    <div className="relative sm:-8 p-4 bg-[#FFFFFF] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar /></div>

      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

      </BrowserRouter>


    </div>
  )
}

export default App