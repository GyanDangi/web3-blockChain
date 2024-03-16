import React from 'react';
import { Form, Route, Routes } from 'react-router-dom';

import {Sidebar, Navbar} from './components'
import {CreateCampaign, CampaignDetails, Home, Profile} from './pages';




const App = () => {
  return (
    <div className="relative sm:-8 p-4 bg-[#020217] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative text-teal-300">
      <Sidebar/>
      </div>

      <div className='flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5 text-teal-300'>
        <Navbar/>

        <Routes>
          <Route path='/' element ={<Home/> } />
          <Route path='profile' element ={<Profile/>} />
          <Route path='/create-campaign' element ={<CreateCampaign/>}/>
          <Route path='/campaign-details/:id' element ={<CampaignDetails/>} />
        </Routes>
        
      </div>

    </div>
  )
}

export default App