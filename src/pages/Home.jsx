import React,  { useEffect, useState } from "react"

import { useStateContext } from "../context"

import DisplayCampaign from "../components/DisplayCampaign";



const Home = () => {

	const [isLoading, setIsLoading]= useState(false);
	const [campaigns, setCampaigns]= useState([]);

	const {address, contract, getCampaigns}= useStateContext();

	const fetchCampaigns =async () =>{
		setIsLoading(true);
		const data = await getCampaigns();
		setCampaigns(data);
		setIsLoading(false);
	}

	useEffect(() =>{
		if(contract) fetchCampaigns();
	}, [address, contract])


  return (
	<DisplayCampaign
	
	title="Number of Campaigns"
	isLoading={isLoading}
	campaigns={campaigns}

	
	/>
  )
}

export default Home
