"use strict"

let timer = document.getElementById("timer");
let interval;
let counter = Number(timer.textContent);

function formatTime(time) {
	let hh = formatTwoDigits(Math.floor(time / 3600));
	time %= 3600;
	let mm = formatTwoDigits(Math.floor(time / 60));
	let ss = formatTwoDigits(time % 60);
	 
	return hh+':'+mm+":"+ss;
};

function formatTwoDigits(n) {
    return n < 10 ? '0' + n : n;
}

timer.textContent = formatTime(counter);

interval = setInterval(function() {
	timer.textContent = formatTime(counter - 1);
	counter--;
	
	if (counter === 0) {
		alert("Вы победили в конкурсе!");
		clearInterval(interval);
		window.location = "file.md";
	};	

	}, 1000);
			