'use strict'

const allFontSizeButtons = document.getElementsByClassName('font-size');

function unactiveFontSize() {
	const activeFont = document.getElementsByClassName('font-size_active')[0];
	console.log(activeFont);
	activeFont.classList.remove('font-size_active');
};

function activeFontSize(element) {
	element.classList.add('font-size_active');
};

function fontSizeForBook(size) {
	const book = document.getElementById('book');
	book.classList.add(size)
};

for (let i=0; i < allFontSizeButtons.length; i++) {
	const fontSizeButton = allFontSizeButtons[i];
	console.log(fontSizeButton);
	fontSizeButton.onclick = function(event) {
		unactiveFontSize();
		activeFontSize(event.target);
		fontSizeForBook(event.target.classList[1])
		console.log(event.target.classList[1])
		return false
	};
}
