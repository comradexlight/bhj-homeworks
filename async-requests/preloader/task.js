'use strict'

const xhr = new XMLHttpRequest();
const img = document.getElementById('loader');
const items = document.getElementById('items');

xhr.responseType = 'json';

xhr.addEventListener('load', function(event){	
	if (xhr.readyState === xhr.DONE) {
		img.classList.remove('loader_active');
		const ObjectWithValutes = xhr.response.response.Valute;	
		for (let key in ObjectWithValutes) {
			let valutesHTML = `
						<div class="item">
							<div class="item__code">
							    ${ObjectWithValutes[key].CharCode}
							</div>
							<div class="item__value">
							    ${ObjectWithValutes[key].Value}
							</div>
							<div class="item__currency">
							    руб.
							</div>
						</div>
						`
			items.insertAdjacentHTML('beforeend', valutesHTML);
		}
	}
});

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/');
xhr.send();
