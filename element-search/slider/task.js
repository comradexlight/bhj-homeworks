'use strict'

let counter = 0;
const prevButton = document.getElementsByClassName("slider__arrow slider__arrow_prev")[0];
const nextButton = document.getElementsByClassName("slider__arrow slider__arrow_next")[0];
const allPhotos = document.getElementsByClassName("slider__item");
let currentPhoto = document.getElementsByClassName("slider__item slider__item_active")[0];



function prevPhoto() {
	if (counter === 0) {
		counter = allPhotos.length;
	};

	counter--;

	allPhotos[counter].classList.add("slider__item_active");
	currentPhoto.classList.remove("slider__item_active");
	currentPhoto = allPhotos[counter];
};


function nextPhoto() {
	counter++;
	
	if (counter === allPhotos.length) {
		counter = 0;
	};	

	allPhotos[counter].classList.add("slider__item_active");
	currentPhoto.classList.remove("slider__item_active");
	currentPhoto = allPhotos[counter];
};


prevButton.onclick = prevPhoto;
nextButton.onclick = nextPhoto;
