"use strict"

const closeButtonsList = document.getElementsByClassName("modal__close modal__close_times");
const wellDoneButton = document.getElementsByClassName("btn btn_danger modal__close show-success")[0];

function showWindow() {
	const openWindowsList = Array.from(document.getElementsByClassName("modal_active"));

	if (openWindowsList.length === 0) {
		document.getElementsByClassName("modal")[0].classList.add("modal_active");
	}
	else if (openWindowsList.length !== 0) {
		closeWindow();
		document.getElementsByClassName("modal")[1].classList.add("modal_active");

	};

};

function closeWindow() {
	document.querySelector(".modal_active").classList.remove("modal_active");
};

showWindow();
closeButtonsList[0].onclick = closeWindow;
wellDoneButton.onclick = showWindow;
closeButtonsList[1].onclick = closeWindow;