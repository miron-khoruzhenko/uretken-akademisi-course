import React from 'react'
import axios from 'axios'

import { MovieBlock } from './MovieBlock';

import apiKey from '../../common/apiKey';
import topRated from './fakedb/topRated';
import genres from './fakedb/genres';


export const MovieListening = () => {
	return (
		<div  className='flex flex-wrap justify-center bg-gradient-to-r '>
			{
				topRated.results.map(item => 
					<MovieBlock imgLink={item.poster_path}/>

				)
				// topRated.results.forEach(item =< {
					
				// })
			}
			
		</div>
	)
}

//* top rated
//  https://api.themoviedb.org/3/movie/top_rated?api_key=0544b2c234127093ad2d3d67de6b49b7&page=1s

//* genrie 
// https://api.themoviedb.org/3/genre/movie/list?api_key=0544b2c234127093ad2d3d67de6b49b7

//* image
// https://image.tmdb.org/t/p/w500/tmU7GeKVybMWFButWEGl2M4GeiP.jpg	

// function getFilmList(){
	
// 	const baseUrl = 'https://api.themoviedb.org/3';
// 	const filmType = '/movie' //movies, tv, 
// 	const sortType = '/top_rated' //top rated, popular, lastes, playing, upcoming
// 	const page = 'page=1'; //01 - 500
// 	const categoryId = '/10752'
// 	const filmId = '01' // 01 - 99

// 	// pages only on top_rated and etc
// 	const urlSorted = `${baseUrl}${filmType}${sortType}?${apiKey}&${page}`
// 	// 
// 	const urlSelected = `${baseUrl}${filmType}${categoryId}${filmId}?${apiKey}`

// 	axios()
// }