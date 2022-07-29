'use strict'

const url = new URL('https://netology-slow-rest.herokuapp.com/');
const xhr = new XMLHttpRequest();
const item = document.getElementsByClassName('item')[0];
const img = document.getElementById('loader');

xhr.responseType = 'json';

xhr.addEventListener('readystatechange', function(event){
	if (xhr.readyState === xhr.DONE){
		img.classList.remove('loader_active');
		const listOfValutes = xhr.response.response.Valute;	
		console.log(listOfValutes)
		for (let key in listOfValutes) {
			console.log(listOfValutes[key].CharCode)
		} 
		// let downloadItem = `
		// 			<div class="item__code">
		// 			    ${xhr.response.response.Valute.CharCode}
		// 			</div>
		// 			<div class="item__value">
		// 			    ${xhr.response.response.Valute.Value}
		// 			</div>
		// 			<div class="item__currency">
		// 			    ${xhr.response.responseValute.Name}
		// 			</div>
		// 			`
		// item.appendChild(downloadItem);
	}
})


xhr.open('GET', url);
xhr.send();

