import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faCoffee } from '@fortawesome/free-solid-svg-icons'
import {faTwitter, faFacebook, faInstagram, faTumblr} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

const items = [
	{
		index: 0,
		title: "Where to buy",
		links: [{
			content : 'Lorem, ipsum dolor.',
			href : 'https://somelink.com'
		},],
	},{
		index: 1,
		title: "Sony Rewards",
		links: [{
			content : 'Lorem, ipsum.',
			href : 'https://somelink.com',
		},{
			content : 'Expedita, officia.',
			href : 'https://somelink.com',
		},{
			content : 'Officiis, iste.',
			href : 'https://somelink.com',
		}]
	},{
		index: 2,
		title: "News & Info",
		links : [
			{
				content : 'Lorem, ipsum.',
				href : 'https://somelink.com',
			},{
				content : 'Sequi, ratione!',
				href : 'https://somelink.com',
			},{
				content : 'Cupiditate, quaerat!',
				href : 'https://somelink.com',
			},{
				content : 'Cum, iusto.',
				href : 'https://somelink.com',
			},{
				content : 'Repudiandae, incidunt!',
				href : 'https://somelink.com',
			},{
				content : 'Repudiandae, eveniet?',
				href : 'https://somelink.com',
			},{
				content : 'Officiis, iste!',
				href : 'https://somelink.com',
			},
		],
	},{
		index : 3,
		title : "Other Sites",
		links : [
			{
				content : 'Lorem, ipsum.',
				href : 'https://somelink.com',
			},{
				content : 'Expedita, officia.',
				href : 'https://somelink.com',
			},{
				content : 'Cum, aut?',
				href : 'https://somelink.com',
			},{
				content : 'Cum, iusto.',
				href : 'https://somelink.com',
			},{
				content : 'Delectus, tempore.',
				href : 'https://somelink.com',
			},{
				content : 'Inventore, optio?',
				href : 'https://somelink.com',
			},
		]
		// links: ['Lorem, ipsum.','Expedita, officia.','Cum, aut?','Delectus, tempore.','Ut, esse!','Inventore, optio?',]
	},
]

const navbar = [{
		content : 'For Professionals',
		href : 'https://somelink.com',
	},{
		content : 'Careers',
		href : 'https://somelink.com',
	},{
		content : 'Contact Us',
		href : 'https://somelink.com',
	},{
		content : 'Company Info',
		href : 'https://somelink.com',
	},{
		content : 'Voluntary Recall',
		href : 'https://somelink.com',
	},]
const social = [
	{
		icon : faTwitter,
		link : 'https://www.twitter.com',
	},
	{
		icon : faFacebook,
		link : 'https://www.faceboot.com',
	},
	{
		icon : faTumblr,
		link : 'https://www.tubnlr.com',
	},
	{
		icon : faInstagram,
		link : 'https://www.instagram.com',
	},
]


const FooterItem = (props) => {
	
	return (
		<div className='w-full'>
		<h4 className="capitalize mb-4 text-gray-800">{props.title}</h4>
		<ul className="">
			{
			props.links.map((link, index) =>{
				let str = `footer${props.index}${index}`
				return (<li className="text-xs mb-2 text-gray-700" key={str}>
					<Link to={link.href}>{link.content}</Link>
					</li>)
			})}
		</ul>
	</div>
)
}


export const Footer = () => {
  return (
	<footer className='w-full bg-slate-200 shadow-sm text-sm pb-20'>

		<div className="pt-12 pb-6 border-y-2 border-gray-300">
			<div className="container mx-auto">
			<div className="flex justify-between">
				{items.map((item, index) => {
					return <FooterItem title={item.title} links={item.links} index={index} key={'FooterItem' + index}/>
				})}
			</div>

			<div className="flex justify-between mt-20">
				<div className="py-2 px-6 pr-20 bg-slate-300 text-gray-800">Russia</div>
					<div className="nav flex items-center">
						<ul className="flex space-x-3">
							{navbar.map((item, index) => {
								return <li className="text-gray-700" key={'footerNav' + index}>
									<Link to={item.href}>{item.content}</Link></li>
							})}
						</ul>
						<ul className="flex space-x-1 ml-5">
							{social.map(item => {
								return <li className="p-1 w-9 h-9 text-xl border-[1px] border-gray-400 text-gray-800 flex justify-center items-center">
									<a  href={item.link}>
										<FontAwesomeIcon icon={item.icon}/>
									</a>
								</li>
							})}
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div className="container mx-auto">
			<h5 className='text-gray-800 uppercase text-xs mt-8 mb-1'>&copy;2023 FROM RUSSIA WITH LOVE</h5>
			<ul className='uppercase text-xs flex space-x-2'>
				<li className="">Terms and conditions</li>
				<li className="">Privacy Policy/Your Region Privacy Rights</li>
			</ul>
		</div>

	</footer>
  )
}
