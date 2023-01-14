"use strict";

const gridBlock = document.querySelector(".grid")
const imageUrl = "https://source.unsplash.com/random/250x250";
const viewer = document.querySelector('.viewer');
const closeBtn = document.querySelector('.close');

let x = 250

for(let i = 0; i<30; i++){
	const imgBlock = document.createElement('div');
	imgBlock.classList.add('grid__img')
	imgBlock.innerHTML = '<div class="loader"><div class="loader-5 center"><span></span></div></div>'
	imgBlock.addEventListener('click',(e) => {
		toggleViewer(e)
		viewer
			.querySelector(".viewer__section__img-block")
			.style
			.backgroundImage = e.target.style.backgroundImage
	})
	gridBlock.append(imgBlock)

	// fetch(`https://source.unsplash.com/random/${x++}x${x++}`)
	// .then(response => response.blob())
	// .then(imageBlob => {
	// 	// Then create a local URL for that image and print it 
	// 	const imageObjectURL = URL.createObjectURL(imageBlob);
	// 	imgBlock.style.backgroundImage = `url("${imageObjectURL}")`
	// })
	// .then(() => {
	// 	gridBlock.append(imgBlock)
	// })
}

const imgBlocks = document.querySelectorAll('.grid__img');


imgBlocks.forEach(imgBlk => {
	fetch(`https://source.unsplash.com/random/${x++}x${x++}`)
	.then(response => response.blob())
	.then(imageBlob => {
		// Then create a local URL for that image and print it 
		const imageObjectURL = URL.createObjectURL(imageBlob);
		imgBlk.style.backgroundImage = `url("${imageObjectURL}")`
		imgBlk.querySelector('.loader').classList.toggle('hidden')
	})
}) 

function toggleViewer(event){
	if(event.target === event.currentTarget){
		viewer.classList.toggle('hidden')
	}
}

closeBtn.addEventListener('click', toggleViewer)
viewer.addEventListener('click', toggleViewer)