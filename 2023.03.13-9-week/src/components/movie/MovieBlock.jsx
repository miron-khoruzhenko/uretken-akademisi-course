import React from 'react'

export const MovieBlock = ({imgLink}) => {
	return (
		<div className='bg-purple-500 max-w-[300px] mx-1 my-6'>

			<img src={`https://image.tmdb.org/t/p/w500/${imgLink}`} alt="" className=''/>
		</div>
	)
}
