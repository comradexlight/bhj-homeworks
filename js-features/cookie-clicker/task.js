"use strict"

const cookie = document.getElementById("cookie");
let clickerCounter = document.getElementById("clicker__counter");
let clickerSpeed = document.getElementById("clicker__speed");
let isEven = false;
let click;
let allTime = 0;

function clickToCookie() {
	let clickTime = Date.now() - click;
	
	if (Number.isNaN(clickTime)) {
		clickTime = 0;
	}
	
	click = Date.now();
	allTime += Number(clickTime);
	
	if (isEven) {
		cookie.width += 20;
		cookie.height += 20;
		isEven = false;
	}
	else if (!isEven) {
		cookie.width -= 20;
		cookie.height -= 20;
		isEven = true;
	};
	
	clickerCounter.textContent = Number(clickerCounter.textContent) + 1;
	
	if (allTime > 0) {
		clickerSpeed.textContent = (Number(clickerCounter.textContent) / allTime * 1000).toFixed(2);
	};

};


cookie.onclick = clickToCookie;
