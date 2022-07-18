'use strict'

const allBlocks = document.getElementsByClassName('reveal');

function isVisible(element) {
	const { top, bottom } = element.getBoundingClientRect();
	if (bottom < 0) {
		return false
	};
	if (top > window.innerHeight) {
		return false
	};
	return true
};

for (let i = 0; i < allBlocks.length; i++) {
	const block = allBlocks[i];
	window.addEventListener('scroll', function() {
		if (isVisible(block) && !block.classList.contains('reveal_active')) {
			block.classList.add('reveal_active');
		};
		if (!isVisible(block) && block.classList.contains('reveal_active')) {
			block.classList.remove('reveal_active');
		};
	});
};
