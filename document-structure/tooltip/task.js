'use strict'

const allElememtsHasTooltipList = document.getElementsByClassName('has-tooltip');

function getCoords(element) {
  let box = element.getBoundingClientRect();

  return {
    top: box.top + window.pageYOffset,
    right: box.right + window.pageXOffset,
    bottom: box.bottom + window.pageYOffset,
    left: box.left + window.pageXOffset
  };
}

function getTooltip(element) {
	const tooltip = document.createElement('div');
	
	let coords = getCoords(element.target);
	tooltip.style.left = coords.left + "px";
  	tooltip.style.top = coords.bottom + "px";
  	tooltip.textContent = element.target.title;
	tooltip.style.position = 'absolute';

	element.target.appendChild(tooltip);
	tooltip.classList.add('tooltip', 'tooltip_active');

	return false
};


for (let i = 0; i < allElememtsHasTooltipList.length; i++) {
	const elementHasTooltip = allElememtsHasTooltipList[i];
	elementHasTooltip.onclick = getTooltip;
};