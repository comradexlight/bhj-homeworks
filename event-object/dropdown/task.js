'use strict'

const currentValueButton = document.getElementsByClassName("dropdown__value")[0];
const allValuesList = document.getElementsByClassName("dropdown__link");

function showAndCloseList(element) {
	element.classList.toggle("dropdown__list_active")
};

function selectValue(element) {
	const currentValue = document.getElementsByClassName("dropdown__value")[0];
	currentValue.textContent = element.target.textContent;
	showAndCloseList(currentValue.nextElementSibling);
	return false
}

currentValueButton.addEventListener("click", function(event) {
	showAndCloseList(event.target.nextElementSibling)
});

for (let i = 0; i < Array.from(allValuesList).length; i++) {
	let link = allValuesList[i];
	link.onclick = selectValue;
};