"use strict"

const cookie = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");
const clickerSpeed = document.getElementById("clicker__speed");
let click;
let isEven = false;
let clickTime;

function clickToCookie() {
	clickTime = Date.now() - click;
	click = Date.now();
		
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
	if (clickTime > 0) {
		clickerSpeed.textContent = (1000 / clickTime).toFixed(2);
	};

};


cookie.onclick = clickToCookie;
