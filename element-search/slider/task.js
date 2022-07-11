'use strict'

const prevButton = document.getElementsByClassName("slider__arrow slider__arrow_prev")[0];
const nextButton = document.getElementsByClassName("slider__arrow slider__arrow_next")[0];

function isCurrent(element) {
	if (element.className === "slider__item slider__item_active") {
		return element
	}
	else {
		return false
	}
};

function currentPhotoIndex() {
	const allPhotos = Array.from(document.getElementsByClassName("slider__item"));
	return allPhotos.findIndex(isCurrent);
};

function closeCurrentPhoto() {
	const allPhotos = Array.from(document.getElementsByClassName("slider__item"));
	allPhotos[currentPhotoIndex()].classList.remove("slider__item_active");
};

function prevPhoto() {
	const allPhotos = document.getElementsByClassName("slider__item");
	const newPhotoIndex = currentPhotoIndex() === 0 ? allPhotos.length - 1 : currentPhotoIndex() - 1;
	closeCurrentPhoto();
	allPhotos[newPhotoIndex].classList.add("slider__item_active");
};

function nextPhoto() {
	const allPhotos = document.getElementsByClassName("slider__item");
	const newPhotoIndex = currentPhotoIndex() === allPhotos.length - 1 ? 0 : currentPhotoIndex() + 1;
	closeCurrentPhoto();
	allPhotos[newPhotoIndex].classList.add("slider__item_active");
}

prevButton.onclick = prevPhoto;
nextButton.onclick = nextPhoto;
