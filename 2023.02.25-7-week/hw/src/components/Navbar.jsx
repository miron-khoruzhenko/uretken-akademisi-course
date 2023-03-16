import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { faMoon, faSun, faUser } from '@fortawesome/free-regular-svg-icons'

const ColorModeSwither = (props) =>{
	
	return (
		<label className="w-[52px] h-[30px] relative inline-block">
			<input type="checkbox" className='opacity-0 w-0 h-0' onChange={props.setDarkMode}/>
				<span className={"absolute top-0 left-0 right-0 bottom-0 " +
								"cursor-pointer " +
								"rounded-full " +
								`${props.darkMode? 'bg-zinc-700' : 'bg-zinc-400' } ` +
								"transition-all duration-300 " 
								}>
					<span className={'absolute left-[4px] bottom-[4px] ' + 
													'h-[22px] w-[22px] ' +
													'rounded-full ' +
													'bg-white text-black ' +
													'transition-all duration-300 ' +
													'flex justify-center items-center ' +
													`${props.darkMode ? 'translate-x-[22px]' : ""} `
												
					}>
						<FontAwesomeIcon icon={faSun} className={`${props.darkMode ? 'opacity-0 rotate-180' : 'opacity-100'} transition-all duration-300`}/>
						<FontAwesomeIcon icon={faMoon} className={`absolute ${props.darkMode ? 'opacity-100' : 'opacity-0 -rotate-180'} transition-all duration-300`}/>
					</span>
				</span>
		</label>
	)
}


export const Navbar = (props) => {
	const links = {
		classNames: "relative transition-colors " +
								"text-zinc-900 dark:text-zinc-200 hover:text-zinc-700 dark:hover:text-zinc-50 " + 
								"after:block after:h-[2px] after:w-full after:my-1 " + 
								"after:transition-opacity after:absolute after:opacity-0 after:bg-zinc-500 dark:after:bg-zinc-200 " + 
								"hover:after:opacity-100  ",

		to: [
			{
				name : "Home",
				href : "/",
			},
			{
				name : "Projects",
				href : "/projects",
			},
			{
				name : "About Us",
				href : "/about",
			},
			{
				name : "Contact",
				href : "/contact",
			},
		]
	}

  return (
	<nav className='w-full bg-white shadow-sm fixed top-0 dark:bg-zinc-800 transition-colors duration-300'>
		<div className="container px-4 py-4 mx-auto flex justify-between">

			{/* logo */}
			<div className="logo">
				<span className="uppercase font-bold 
												text-xl text-zinc-700 hover:text-zinc-900 
												dark:text-zinc-300 dark:hover:text-zinc-50
												transition-colors duration-300 
												cursor-pointer">Orinium</span>
			</div>

			{/* links */}
			<ul className="flex space-x-4 max-sm:hidden">
				{links["to"].map((item, index) => {
					return <li className="" key={index}><Link to={item.href} className={links.classNames}>{item.name}</Link></li>
				})}
			</ul>

			{/* color switcher and user icon */}
			<ul className='flex items-center space-x-1'>
				<li>
					<ColorModeSwither setDarkMode={props.setDarkMode} darkMode={props.darkMode}/>
				</li>
				<li className={`text-black aspect-square h-[22px] text-sm rounded-full text-center bg-white cursor-pointer`}>
					<FontAwesomeIcon icon={faUser}/>
				</li>
			</ul>

		</div>
	</nav>
  )
}

