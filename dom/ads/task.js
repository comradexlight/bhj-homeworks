'use strict'

const allAds = document.getElementsByClassName('rotator__case');
let counter = 0;

function setColor(element) {
	element.style.color = element.dataset.color;
};

function showPhrase(element) {
	element.classList.toggle('rotator__case_active');
};

setColor(document.getElementsByClassName('rotator__case_active')[0]);

setInterval(function() {
	counter++;

	if (counter === allAds.length) {
		counter = 0;
	};
	
	let rotatorCaseActive = document.getElementsByClassName('rotator__case_active')[0];
	showPhrase(rotatorCaseActive);
	rotatorCaseActive = allAds[counter];
	showPhrase(rotatorCaseActive);
	setColor(rotatorCaseActive);

}, allAds[counter].dataset.speed);
