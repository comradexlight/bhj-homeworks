'use strict'

const allTabs = document.getElementsByClassName("tab");
const allTabsContent = document.getElementsByClassName("tab__content");

for (let i = 0; i<allTabs.length; i++) {
	const tab = allTabs[i];
	tab.addEventListener("click", function(event) {
		document.getElementsByClassName("tab_active")[0].classList.remove("tab_active");
		tab.classList.add("tab_active");

		document.getElementsByClassName("tab__content_active")[0].classList.remove("tab__content_active");
		allTabsContent[i].classList.add("tab__content_active");
	})

};