'use strict'

const allTabs = document.getElementsByClassName("tab");

for (let i = 0; i<allTabs.length; i++) {
	const tab = allTabs[i];
	tab.addEventListener("click", function(event) {
		document.getElementsByClassName("tab_active")[0].remove("tab_active");
		event.target.classList.add("tab_active");
	})

};