// import KUTE from 'kute.js'
'use strict'

const loader = document.querySelector("#loader");
const pink = document.querySelector(".pink");

const tween = KUTE.fromTo(
	'#blob1',
	{path: '#blob1'},
	{path: '#blob2'},
	{repeat: 999, duration: 3000, yoyo: true}
)

tween.start()
window.addEventListener('load', ()=>{
	setTimeout(()=>{
		loader.classList.add('hidden')
		pink.classList.remove('hidden')
		
		// console.log(loader)

	}, 2000)
})