'use strict'

const allBlocks = document.getElementsByClassName('reveal');


for (let i = 0; i < allBlocks.length; i++) {
	const block = allBlocks[i];
	window.addEventListener('scroll', function() {
		//console.log(pageYOffset, window.scrollY - block.getBoundingClientRect().height / 2 )
  		if (pageYOffset >= window.scrollY - block.getBoundingClientRect().height / 2  && !block.classList.contains('reveal_active')) {
  			block.classList.add('reveal_active');
  		}
  		else if (pageYOffset < window.scrollY - block.getBoundingClientRect().height / 2 && block.classList.contains('reveal_active')) {
  			block.classList.remove('reveal_active');
  		}
	});
};

