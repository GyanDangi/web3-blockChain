import React,  { useEffect, useState } from "react"


import { useStateContext } from "../context"

import DisplayCampaign from "../components/DisplayCampaign";



const Profile = () => {

	const [isLoading, setIsLoading]= useState(false);
	const [campaigns, setCampaigns]= useState([]);

	const {address, contract, getUserCampaigns}= useStateContext();

	const fetchCampaigns =async () =>{
		setIsLoading(true);
		const data = await getUserCampaigns();
		setCampaigns(data);
		setIsLoading(false);
	}

	useEffect(() =>{
		if(contract) fetchCampaigns();
	}, [address, contract])


  return (
	<DisplayCampaign
	
	title="Your Campaings"
	isLoading={isLoading}
	campaigns={campaigns}

	
	/>
  )
}

export default Profile
