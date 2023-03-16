import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook, faInstagram, faTumblr } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

const items = [
	{
		index: 0,
		title: "Where to buy",
		links: [{
			content: 'Lorem, ipsum dolor.',
			href: 'https://somelink.com'
		},],
	}, {
		index: 1,
		title: "Sony Rewards",
		links: [{
			content: 'Lorem, ipsum.',
			href: 'https://somelink.com',
		}, {
			content: 'Expedita, officia.',
			href: 'https://somelink.com',
		}, {
			content: 'Officiis, iste.',
			href: 'https://somelink.com',
		}]
	}, {
		index: 2,
		title: "News & Info",
		links: [
			{
				content: 'Lorem, ipsum.',
				href: 'https://somelink.com',
			}, {
				content: 'Sequi, ratione!',
				href: 'https://somelink.com',
			}, {
				content: 'Cupiditate, quaerat!',
				href: 'https://somelink.com',
			}, {
				content: 'Cum, iusto.',
				href: 'https://somelink.com',
			}, {
				content: 'Repudiandae, incidunt!',
				href: 'https://somelink.com',
			}, {
				content: 'Repudiandae, eveniet?',
				href: 'https://somelink.com',
			}, {
				content: 'Officiis, iste!',
				href: 'https://somelink.com',
			},
		],
	}, {
		index: 3,
		title: "Other Sites",
		links: [
			{
				content: 'Lorem, ipsum.',
				href: 'https://somelink.com',
			}, {
				content: 'Expedita, officia.',
				href: 'https://somelink.com',
			}, {
				content: 'Cum, aut?',
				href: 'https://somelink.com',
			}, {
				content: 'Cum, iusto.',
				href: 'https://somelink.com',
			}, {
				content: 'Delectus, tempore.',
				href: 'https://somelink.com',
			}, {
				content: 'Inventore, optio?',
				href: 'https://somelink.com',
			},
		]
		// links: ['Lorem, ipsum.','Expedita, officia.','Cum, aut?','Delectus, tempore.','Ut, esse!','Inventore, optio?',]
	},
]

const navbar = [{
	content: 'For Professionals',
	href: 'https://somelink.com',
	index: 0,
}, {
	content: 'Careers',
	href: 'https://somelink.com',
	index: 1,
}, {
	content: 'Contact Us',
	href: 'https://somelink.com',
	index: 2,
}, {
	content: 'Company Info',
	href: 'https://somelink.com',
	index: 3,
}, {
	content: 'Voluntary Recall',
	href: 'https://somelink.com',
	index: 4,
},]

const social = [
	{
		icon: faTwitter,
		link: 'https://www.twitter.com',
		index: '0'
	},
	{
		icon: faFacebook,
		link: 'https://www.faceboot.com',
		index: '1'
	},
	{
		icon: faTumblr,
		link: 'https://www.tubnlr.com',
		index: '2'
	},
	{
		icon: faInstagram,
		link: 'https://www.instagram.com',
		index: '3'
	},
]

const FooterItem = (props) => {

	return (
		<div className='w-full'>
			<h4 className="capitalize my-4 text-zinc-800 dark:text-zinc-500 md:text-left max-sm:text-center">{props.title}</h4>
			<ul className="">
				{
					props.links.map((link, index) => {
						let str = `footer${props.index}${index}`
						return (<li className="text-xs mb-2 text-zinc-700 dark:text-zinc-300 md:text-left max-sm:text-center" key={str}>
							<Link to={link.href}>{link.content}</Link>
						</li>)
					})}
			</ul>
		</div>
	)
}


export const Footer = () => {

	return (
		<footer className='w-full bg-zinc-200 dark:bg-zinc-800 shadow-sm text-sm pb-20 transition-colors duration-300'>

			<div className="pt-12 pb-6 border-y-2 border-zinc-300 dark:border-zinc-700/70 transition-colors duration-300">

				{/* Link lists */}
				<div className="container mx-auto">
					<div className="flex md:justify-between md:flex-nowrap max-sm:flex-wrap">
						{items.map((item, index) => {
							return <FooterItem title={item.title} links={item.links} index={index} key={'FooterItem' + index} />
						})}
					</div>

					<div className="flex justify-between mt-20">

						{/* Country */}
						<div className="py-2 px-6 lg:pr-20 md:px-8 mr-2 block max-md:hidden	
													bg-zinc-300 dark:bg-zinc-700
													text-zinc-800 dark:text-zinc-300
													transition-colors duration-300">Russia</div>

						{/* Footer navbar */}
						<div className="flex items-center justify-between max-sm:flex-wrap max-sm:justify-center
													lg:w-auto sm:w-full
													
													">

							<ul className="flex max-sm:flex-wrap max-sm:justify-center max-sm:gap-4 
													max-sm:mb-4 space-x-3 
													transition-colors duration-300 
													max-sm:text-xs max-sm:text-center">
								{navbar.map(item => {
									return <li className="text-zinc-700 dark:text-zinc-300" key={item.index}>
										<Link to={item.href}>{item.content}</Link></li>
								})}
							</ul>

							{/* Social Icons */}
							<ul className="flex space-x-1 lg:ml-5">
								{social.map( item => {
									return <li key={item.index} className="p-1 w-9 h-9 
																				text-xl text-zinc-800 dark:text-zinc-200
																				border-[1px] border-zinc-400 dark:border-zinc-800
																				dark:bg-zinc-700
																				transition-colors duration-300
																				flex justify-center items-center ">
										<a href={item.link}>
											<FontAwesomeIcon icon={item.icon} />
										</a>
									</li>
								})}
							</ul>

						</div>
					</div>

				</div>
			</div>
			<div className="container mx-auto">
				{/* Policity and rights */}
				<h5 className='text-zinc-800 dark:text-zinc-500 uppercase text-xs mt-8 mb-1'>&copy;2023 FROM RUSSIA WITH LOVE</h5>
				<ul className='uppercase text-xs flex space-x-2 text-zinc-900 dark:text-zinc-400 transition-colors duration-300'>
					<li key='terms' className="">Terms and conditions</li>
					<li key='policy' className="">Privacy Policy/Your Region Privacy Rights</li>
				</ul>
			</div>

		</footer>
	)
}
