import React from 'react'

const InfoBlock = ({title, img, desc, id}) => {
	return (
		<div className="border-y-2 border-zinc-900 w-full">
			<div className={`flex ${id % 2 === 0 ? 'flex-row-reverse ' : ''} justify-center items-center container mx-auto`}>
				<div className="flex flex-col justify-center items-center text-center flex-1">
					<h2 className="font-extrabold text-5xl">{title}</h2>
					<p className="text-2xl mt-3">{desc}</p>
				</div>
				<div className="flex-1"><img src={img} alt="" className='mx-auto' /></div>
			</div>
		</div>
	)
}

export default InfoBlock;