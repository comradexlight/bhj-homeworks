'use strict'

const mainBlocks = document.getElementsByClassName('interests interests_active');

for (let i = 0; i < mainBlocks.length; i++) {
	const block = mainBlocks[i];
	const mainCheckbox = block.previousElementSibling.querySelector('.interest__check');
	const littleCheckboxList = block.querySelectorAll('.interest__check');
	
	mainCheckbox.addEventListener('change', function() {
		littleCheckboxList.forEach((element) => {
			element.checked = mainCheckbox.checked;
		})
	})
}