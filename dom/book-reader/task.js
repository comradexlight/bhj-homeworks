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
		book.classList = 'book book_fs-small';
	}
	else if (element.classList.contains('font-size_big')) {
		book.classList = 'book book_fs-big';
	}
	else {
		book.classList = 'book';
	};
};

function textColorActive(element) {
	element.classList.add('color_active');
};

function textColorDeactivate() {
	const activeTextColor = document.getElementsByClassName('color_active')[0];
	activeTextColor.classList.remove('color_active');
};

function bookTextColorActive(element) {
	const book = document.getElementById('book');
	if (element.dataset.textColor === 'black') {
		book.classList.add('book_color-black');
	}
	else if (element.dataset.textColor === 'gray') {
		book.classList.add('book_color-gray');
	}
	else if (element.dataset.textColor === 'whitesmoke') {
		book.classList.add('book_color-whitesmoke');
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
		
		return false
	};
};