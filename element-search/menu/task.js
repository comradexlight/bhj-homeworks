"use strict"

const allMenuLinks = document.getElementsByClassName("menu__link");

for (let i = 0; i < Array.from(allMenuLinks).length; i++) {
	let link = allMenuLinks[i];
	link.addEventListener("click", console.log(link), false);
};
