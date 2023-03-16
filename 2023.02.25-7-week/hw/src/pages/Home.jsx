import React, { useEffect } from 'react'

import { MovieListing } from './MovieListing'
import movieApi from '../common/apis/movieApi'
import { APIKey } from '../common/apis/movieApiKey'


export const Home = () => {
	useEffect(() => {
		const movieText = 'Harry';
		const fetchMovies = async () => {
			const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
			.catch(err => {
				console.log("Error: ", err)
			})

			console.log("The response from API: ", response)
		}

		// fetchMovies()
	}, [])


	
	return (
		<div className='h-screen flex justify-center items-center text-9xl bold'>
		{/* <div> */}
			
			
			<MovieListing />
		</div>
	)
}
