import React from 'react'


export const Switcher = (props) => {
	const {condition, setCondition} = props

	return (
		<label className="w-[52px] h-[30px] relative inline-block">
		<input type="checkbox" className='opacity-0 w-0 h-0' onChange={()=>{setCondition(!condition)}}/>
			<span className={"absolute top-0 left-0 right-0 bottom-0 " +
							"cursor-pointer " +
							"rounded-full " +
							`${condition? 'bg-zinc-700' : 'bg-zinc-400' } ` +
							"transition-all duration-300 " 
							}>
				<span className={'absolute left-[4px] bottom-[4px] ' + 
												'h-[22px] w-[22px] ' +
												'rounded-full ' +
												'bg-white text-black ' +
												'transition-all duration-300 ' +
												'flex justify-center items-center ' +
												`${condition ? 'translate-x-[22px]' : ""} `
											
				}>
					{props.children}
				</span>
			</span>
	</label>
	)
}
