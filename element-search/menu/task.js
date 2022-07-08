"use strict"

//const allMenuLinks = document.getElementsByClassName("menu__link");
const allMenuLinks = document.querySelectorAll(".menu__link");
//console.log(allMenuLinks);

for (let link = 0; link < Array.from(allMenuLinks).length; link++) {
	allMenuLinks[link].addEventListener("click", function() {
		return function(){		
			allMenuLinks[link].nextElementSibling.classList.toggle("menu_active"); //add("menu_active");
		}
	}(link))
};
