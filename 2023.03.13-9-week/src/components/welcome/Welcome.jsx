import React from 'react'

import Hero from "./hero/Hero";
import InfoListening from "./info/InfoListening";

import Navbar from '../navbar/Navbar';

export const Welcome = () => {
	return (
		<>
      <Navbar/>
			<Hero/>
      <InfoListening/>
		</>
	)
}
