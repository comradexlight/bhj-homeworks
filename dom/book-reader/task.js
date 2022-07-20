'use strict'

const allFontSizeButtons = document.getElementsByClassName('font-size');
const allTextColorButtons = document.querySelectorAll('[data-text-color]');
const allBgColorButtons = document.querySelectorAll('[data-bg-color]');


function fontSizeActive(element) {
	element.classList.add('font-size_active');
};

function fontSizeDeactivate() {
	const activeFont = document.getElementsByClassName('font-size_active')[0];
	activeFont.classList.remove('font-size_active');
};

function bookSizeActive(element) {
	const book = document.getElementById('book');
	if (element.classList.contains('font-size_small')) {
		book.classList.remove('book_fs-big')
		book.classList.add('book_fs-small');
	}
	else if (element.classList.contains('font-size_big')) {
		book.classList.remove('book_fs-small')
		book.classList.add('book_fs-big');
	}
	else {
		book.classList.remove('book_fs-small');
		book.classList.remove('book_fs-big');
	};
};

function textColorActive(element) {
	element.classList.add('color_active');
};

function textColorDeactivate() {
	const activeTextColor = document.querySelector('[data-text-color].color_active');
	activeTextColor.classList.remove('color_active');
};

function bookTextColorActive(element) {
	const book = document.getElementById('book');
	if (element.dataset.textColor === 'black') {
		book.classList.remove('book_color-gray');
		book.classList.remove('book_color-whitesmoke');
		book.classList.add('book_color-black');
	}
	else if (element.dataset.textColor === 'gray') {
		book.classList.remove('book_color-black');
		book.classList.remove('book_color-whitesmoke');
		book.classList.add('book_color-gray');
	}
	else if (element.dataset.textColor === 'whitesmoke') {
		book.classList.remove('book_color-black');
		book.classList.remove('book_color-gray');
		book.classList.add('book_color-whitesmoke');
	}
};

function bgColorActive(element) {
	element.classList.add('color_active');
};

function bgColorDeactivate() {
	const activeBgColor = document.querySelector('[data-bg-color].color_active');
	activeBgColor.classList.remove('color_active');
};

function bookBgColorActive(element) {
	const book = document.getElementById('book');
	if (element.dataset.bgColor === 'black') {
		book.classList.remove('book_bg-gray');
		book.classList.remove('book_bg-white');
		book.classList.add('book_bg-black');
	}
	else if (element.dataset.bgColor === 'gray') {
		book.classList.remove('book_bg-black');
		book.classList.remove('book_bg-white');
		book.classList.add('book_bg-gray');
	}
	else if (element.dataset.bgColor === 'white') {
		book.classList.remove('book_bg-black');
		book.classList.remove('book_bg-white');
		book.classList.add('book_bg-white');
	}
};

for (let i = 0; i < allFontSizeButtons.length; i++) {
	const fontSizeButton = allFontSizeButtons[i];
	fontSizeButton.onclick = function(event) {
		fontSizeDeactivate();
		fontSizeActive(event.target);
		bookSizeActive(event.target);
		return false
	}
};

for (let i = 0; i < allTextColorButtons.length; i++) {
	const textColorButton = allTextColorButtons[i];
	textColorButton.onclick = function(event) {
		textColorDeactivate();
		textColorActive(event.target);
		bookTextColorActive(event.target);
		return false
	};
};

for (let i = 0; i < allBgColorButtons.length; i++) {
	const bgColorButton = allBgColorButtons[i];
	bgColorButton.onclick = function(event) {
		bgColorDeactivate();
		bgColorActive(event.target);
		bookBgColorActive(event.target);
		return false
	};
};