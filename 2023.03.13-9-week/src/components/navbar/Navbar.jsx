import React from 'react'
// import React, { useEffect, useState } from 'react'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMoon, faSun, faUser } from '@fortawesome/free-regular-svg-icons'

import { Link } from 'react-router-dom'
// import { links } from './links'

// import { Switcher } from './Switcher'

import logo from '../../imgs/logo.svg'

// const ColorModeSwither = () =>{

// 	const [darkMode, setDarkMode] = useState('true')

// 	useEffect(() => {
// 		if(darkMode){
// 			document.body.classList.add('dark', 'bg-zinc-800');
// 		}else{
// 			document.body.classList.remove('dark', 'bg-zinc-800');
// 		}
// 	}, [darkMode])

// 	return (
// 		<Switcher 
// 			condition={darkMode} 
// 			setCondition={setDarkMode}
// 			classList="">
// 						<FontAwesomeIcon 
// 							icon={faSun} 
// 							className={`${darkMode ? 'opacity-0 rotate-180' : 'opacity-100'} transition-all duration-300`}/>
// 						<FontAwesomeIcon 
// 							icon={faMoon} 
// 							className={`${darkMode ? 'opacity-100' : 'opacity-0 -rotate-180'} transition-all duration-300 absolute`}/>
// 		</Switcher>

// 	)
// }


const Navbar = (props) => {

  return (
	<nav 
		className="w-full h-15
			bg-black/80 shadow-sm
			fixed top-0 z-50
			transition-colors duration-300">

		<div className="container px-4 py-4 mx-auto flex justify-between items-center">
			{/* logo */}
			<div className="logo w-28">
				<Link to={'/'}>
					<img src={logo} alt="" className=' ' />
				</Link>
			</div>

			{/* links */}
			{/* <ul className="flex space-x-4 max-sm:hidden ">
				{links["to"].map((item, index) => {
					return (
					<li 
						className="" 
						key={index}>
							<Link 
								to={item.href} 
								className={links.classNames}>
									{item.name}
							</Link>
					</li>)
				})}
			</ul> */}

			{/* color switcher and user icon */}

					<button className='
						bg-[#e50914] px-3 py-1 
						text-white rounded-md font-semibold
						hover:bg-[#9f050d] transition-colors '>
							Oturum Aç
					</button>


		</div>
	</nav>
  )
}

export default Navbar;