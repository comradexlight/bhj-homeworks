'use strict'

const progress = document.getElementById('progress');
const formWithFile = document.forms.form;


formWithFile.addEventListener('submit', function(event) {
	event.preventDefault();

	const xhr = new XMLHttpRequest();
	
	xhr.addEventListener('progress', function(event){
		progress.value = event.loaded * Math.pow(10, -8);
	});

	xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php', true);
	xhr.setRequestHeader('Content-Type','multipart/form-data');

	const formData = new FormData(formWithFile);

	xhr.send(formData);

})
