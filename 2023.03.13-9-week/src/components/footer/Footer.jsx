import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import items from './lists';
import navbar from './verticalList.js';
import social from './socialLinks';

const FooterItem = (props) => {
	return (
		<div className='w-full'>

			<h4 className="
					capitalize my-4 text-zinc-800 dark:text-zinc-500 
					md:text-left max-sm:text-center">
						{props.title}
			</h4>
			
			<ul className="">
				{
					props.links.map((link, index) => {
						let str = `${link.content} - ${props.index}`

						return (
							<li 
								className="text-xs mb-2 text-zinc-700 
									dark:text-zinc-300 md:text-left 
									max-sm:text-center" key={str}>
								<Link to={link.href}>
									{link.content}
								</Link>
							</li>)
					})}
			</ul>
		</div>
	)
}


const Footer = () => {
	return (
		<footer className='
			w-full bg-black
			shadow-sm text-sm pb-20 transition-colors duration-300'>

			<div className="
				pt-12 pb-6 
				border-y-2 border-zinc-900/70 
				transition-colors duration-300">

				{/*//* Link lists */}
				<div className="container mx-auto">

					<div className="flex md:justify-between md:flex-nowrap max-sm:flex-wrap">
						{items.map((item) => {
							return <FooterItem title={item.title} links={item.links} index={item.index} key={'FooterItem - ' + item.index} />
						})}
					</div>

					<div className="flex justify-between mt-20">

						{/*//* Country */}
						<div className="
							py-2 px-6 lg:pr-20 md:px-8 mr-2 block max-md:hidden	
							bg-zinc-700
							text-zinc-300
							transition-colors duration-300">
									Russia
						</div>

						{/*//* Footer navbar */}
						<div className="
							flex items-center justify-between 
							max-sm:flex-wrap max-sm:justify-center
							lg:w-auto sm:w-full">

							<ul className="
								flex max-sm:flex-wrap max-sm:justify-center max-sm:gap-4 
								max-sm:mb-4 space-x-3 
								transition-colors duration-300 
								max-sm:text-xs max-sm:text-center">
								{
								navbar.map(item => {
									return <li className="text-zinc-300" key={item.index}>
										<Link to={item.href}>{item.content}</Link></li>
								})
								}
							</ul>

							{/*//* Social Icons */}
							<ul className="flex space-x-1 lg:ml-5">
								{social.map( item => {
									return (
									<li key={item.index} 
										className="p-1 w-9 h-9 
											text-xl text-zinc-200
											border-[1px] border-zinc-800
											bg-zinc-700
											transition-colors duration-300
											flex justify-center items-center ">
										<a href={item.link}>
											<FontAwesomeIcon icon={item.icon} />
										</a>
									</li>)
								})}
							</ul>
	
						</div> {/*//* Footer navbar */}
					</div>
				</div>
			</div>

			<div className="container mx-auto">
				{/* Policity and rights */}
				<h5 className='
					text-zinc-800 dark:text-zinc-500 
					uppercase text-xs mt-8 mb-1'>
					&copy;2023 FROM RUSSIA WITH LOVE
				</h5>

				<ul className='
					uppercase text-xs flex space-x-2 
					text-zinc-900 dark:text-zinc-400 
					transition-colors duration-300'>
					<li className="">Terms and conditions</li>
					<li className="">Privacy Policy/Your Region Privacy Rights</li>
				</ul>
			</div>

		</footer>
	)
}

export default Footer;
