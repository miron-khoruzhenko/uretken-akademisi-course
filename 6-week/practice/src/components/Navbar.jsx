import React from 'react'

export const Navbar = () => {
	const links = {
		style: "relative after:transition-opacity after:content-[''] after:absolute after:block after:opacity-0 after:h-[2px] after:w-full after:bg-gray-400 after:my-1 hover:after:opacity-100 hover:text-gray-700 text-gray-900 transition-colors",
		to: [
			{
				name : "Home",
				href : "/home",
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
	<nav className='w-full bg-slate-200 shadow-sm '>
		<div className="container px-4 py-4 mx-auto flex justify-between">
			<div className="logo">
				<span className="uppercase font-bold text-[#3a3a3c] text-xl cursor-pointer">Orinium</span>
			</div>
			<ul className="flex space-x-4">
				{links["to"].map((item) => {
					return <li className=""><a href={item.href} className={links.style}>{item.name}</a></li>
				})}
			</ul>

		</div>
	</nav>
  )
}
