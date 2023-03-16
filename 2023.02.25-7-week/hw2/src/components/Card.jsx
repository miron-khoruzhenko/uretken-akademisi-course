import React from 'react'

import { Link } from 'react-router-dom'

export const Card = (props) => {


	return (
		<div className='
			relative w-64 border-2 dark:border-0 shadow-md bg-zinc-200 dark:bg-zinc-800 rounded-2xl overflow-hidden aspect-[32/45]
			before:absolute before:top-0 before:left-0 before:w-full before:h-full
			before:transition-all before:duration-300 before:clip2 before:bg-blue-400/50 dark:before:bg-zinc-900/50
			after:content-["Orinium"] after:absolute after:top-1/2 after:-left-[40%]
			after:text-9xl after:font-bold after:italic dark:after:text-white/5 after:rotate-45 after:text-black/10
			hover:before:clip1 group
			'>
			<div className="
				imgBx absolute top-1/2 -translate-y-1/2 z-10 w-full h-full duration-500 
				group-hover:top-0 group-hover:-translate-y-[20%]">
					{/* <img src="http://pngimg.com/uploads/running_shoes/running_shoes_PNG5782.png" alt="nike-air-shoe"/> */}
					<Link	 to={`/product/${props.id}`} >
						<img src={props.imgUrl} alt="nike-air-shoe" 
							className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[70%] w-24 border-2 border-zinc-900'/>
					</Link>
			</div>

			<div className="contentBx absolute bottom-0 w-full h-24 text-center duration-300 z-10 group-hover:h-[55%]">

					<h2 className='relative font-semibold tracking-wider text-zinc-900 dark:text-white'>
						<Link to={`/product/${props.id}`}>
							{props.name}

						</Link>
					</h2>

					<div className="
						size flex justify-center items-center 
						py-2 px-5 transition duration-300 opacity-0 
						group-hover:opacity-100 group-hover:delay-300">
							<h3 className='text-zinc-900 dark:text-white font-light text-xs uppercase tracking-widest'>Rate :</h3>
							<span className='w-7 h-6 mx-4
									text-center text-sm text-zinc-900 rounded
									inline-block bg-white transition-transform duration-300'>{props.rate}</span>
					</div>

					<div className="
						color flex justify-center items-center py-2 px-5 
						transition duration-300 opacity-0 
						group-hover:opacity-100 group-hover:delay-[400ms]">

							<h3 className='text-zinc-900 dark:text-white font-light text-xs uppercase tracking-widest'>Price : </h3>
							<span className='text-zinc-900 dark:text-white mx-2'> {props.price}$</span>
					</div>
					<Link to={`/product/${props.id}`} className='
						transition-all duration-300 translate-y-1/2 opacity-0 
						text-zinc-900 font-semibold mt-2 py-2 px-5 rounded 
						inline-block bg-white
						group-hover:opacity-100 group-hover:translate-y-0 delay-[500ms]'>Buy Now</Link>
			</div>
	</div>
	)
}