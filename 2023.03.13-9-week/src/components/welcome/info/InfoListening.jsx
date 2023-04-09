import React from 'react'
import InfoBlock from './InfoBlock'

import img1 from '../../../imgs/welcome/item-1.jpg'
import img2 from '../../../imgs/welcome/item-2.jpg'
import img3 from '../../../imgs/welcome/item-3.jpg'
import img4 from '../../../imgs/welcome/item-4.jpg'

const infoData = [
	{
		id: 0,
		title: 'Televizyonunuzda izleyebilirsiniz',
		desc: 'Akıllı TV, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray oynatıcılar ve daha fazlasında seyredin.',
		img: img1
	},
	{
		id: 1,
		title: 'Çevrimdışı izlemek için içerikleri indirin.',
		desc: 'En sevdiğiniz içerikleri kolayca kaydedin ve her zaman izleyecek bir şeyleriniz olsun.',
		img: img2
	},
	{
		id: 2,
		title: 'İstediğiniz her yerde izleyin.',
		desc: 'Ekstra ücret ödemeden telefonda, tablette, bilgisayarda, televizyonda sınırsız film ve dizi izleyin.',
		img: img3
	},
	{
		id: 3,
		title: 'Çocuklarınız için profiller oluşturun.',
		desc: 'Üyeliğinize dâhil olan bu ücretsiz deneyim sayesinde çocuklarınız, sadece onlara özel bir alanda en sevdikleri karakterlerle maceralara atılabilir.',
		img: img4
	},
]

const InfoListening = () => {
	return (
		<div className='text-white'>
			{
				infoData.map(item => 
					<InfoBlock 
						title={item.title} 
						desc={item.desc} 
						img={item.img} 
						key={'info ' + item.id} 
						id={item.id}/>
				)
			}
		</div>
	)
}

export default InfoListening;