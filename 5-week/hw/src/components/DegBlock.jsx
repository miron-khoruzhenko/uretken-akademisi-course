import React from 'react'

export const DegBlock = (props) => {
  return (
	<div className='text-center border-2 border-slate-400 inline-block p-4 my-6 w-40'>
		<h2 className='text-slate-900 
						after:content-[""] 
						after:block 
						after:h-[2px] 
						after:w-full 
						after:bg-slate-400'>
							{props.name}</h2>
		{/* Degree value */}
		<div className="flex justify-center align-top my-2">
			<span className="text-slate-900 text-4xl">{props.degValue}</span>
			<span className="">{props.unit}</span>
		</div>

	</div>
  )
}
