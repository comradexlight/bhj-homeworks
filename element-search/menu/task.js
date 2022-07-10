"use strict"

const allMenuLinks = document.querySelectorAll(".menu__link");

for (let i = 0; i < Array.from(allMenuLinks).length; i++) {
	let link = allMenuLinks[i];
	if ((link.nextElementSibling !== null) && (link.nextElementSibling.classList.contains("menu__item") !== null))  {
		link.onclick = () => {
			console.log("here");
			link.nextElementSibling.classList.toggle("menu_active");
			return false
		};
	};
};