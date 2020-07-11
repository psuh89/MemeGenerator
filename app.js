const form = document.querySelector('.form')
const memeGallery = document.querySelector('.Gallery')

form.addEventListener('submit', (e) => {
	e.preventDefault()
	createMemeDiv()
	form.reset()
})

memeGallery.addEventListener('click', (e) => {
	if (e.target.tagName === 'SPAN') {
		e.target.parentElement.remove()
	}
})

const createMemeDiv = () => {
	const meme = document.createElement('div')
	const deleteX = document.createElement('span')
	deleteX.innerText = 'X'
	deleteX.className = 'delete'
	meme.appendChild(deleteX)
	memeGallery.appendChild(meme)
	meme.className = 'meme'

	const urlInput = document.querySelector('input[name=meme-url]').value
	const memeImg = document.createElement('img')
	memeImg.className = 'img'
	memeImg.setAttribute('src', urlInput)

	const topInput = document.querySelector('input[name=top-text]').value
	const topText = document.createElement('h2')
	topText.className = 'top'
	topText.innerText = topInput

	const bottomText = document.createElement('h2')
	const bottomInput = document.querySelector('input[name=bottom-text]').value
	bottomText.className = 'bottom'
	bottomText.innerText = bottomInput

	meme.appendChild(memeImg)
	meme.appendChild(topText)
	meme.appendChild(bottomText)
}