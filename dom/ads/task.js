'use strict'

const allAds = document.getElementsByClassName('rotator__case');
let counter = 1

setInterval(function() {
	if (counter === allAds.length) {
		counter = 0;
	};
	let rotatorCaseActive = document.getElementsByClassName('rotator__case_active')[0];
	rotatorCaseActive.classList.toggle('rotator__case_active');
	rotatorCaseActive = allAds[counter];
	rotatorCaseActive.classList.toggle('rotator__case_active');
	counter++;
}, 1000)
