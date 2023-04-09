import React from 'react'

const Hero = () => {
	return (
		<div className='h-screen flex flex-col justify-center items-center text-white bg-netflix bg-no-repeat bg-cover bg-center' >
			<h2 className='font-bold text-5xl'>Sınırsız film, dizi ve çok daha fazlası.</h2>
			<p className='text-2xl my-8'>İstediğiniz yerde izleyin. İstediğiniz zaman iptal edin.</p>
			<p className='text-xl'>İzlemeye hazır mısınız? Üyelik oluşturmak veya üyeliğinize erişmek için e‑posta adresinizi girin</p>
			<div className='flex justify-center mt-9 container'>
				<input 
					type="email" 
					className='px-4 py-2 h-12 w-1/3 rounded-sm mr-4 bg-zinc-900/50 border border-zinc-600'
					placeholder='E-posta adresi'
					/>
				<button className='
						bg-[#e50914] px-5 py-2 h-12
						text-white rounded-sm font-semibold text-2xl
						hover:bg-[#9f050d] transition-colors '>
							Başlayın &gt;
					</button>
			</div>
		</div>
	)
}

export default Hero;